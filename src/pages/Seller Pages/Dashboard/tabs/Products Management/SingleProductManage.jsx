import { useState } from "react";
import AddProduct from "../../modals/Add Product Modal/AddEditProductForm";
import toast from "react-hot-toast";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "src/config/firebase";
import IconicWarningAlert from "UI/Alerts/IconicAlert";
import { deleteObject, ref } from "firebase/storage";
import ProductDetails from "./ProductDetails";
import LoaderIcon from "../../../../../common/UI elements/Loaders/LoaderIcon";

function SingleProductManage({ selectedItem, onModalClose, getProducts }) {
  // edit modal state
  const [isEdit, setEditShow] = useState(false);
  const [{ loading, isSelected }, setDelete] = useState({
    isSelected: false,
    loading: false,
  });

  async function deleteProduct() {
    // delete product if user confirmed
    if (isSelected) {
      // delete product cell from firestore
      try {
        // display loading screen
        setDelete((prev) => ({ ...prev, loading: true }));
        // Delete all images associated with the product
        const deleteImagePromises = selectedItem.Images?.map(
          async (imageUrl) => {
            // Create a reference to the image in Firebase Storage
            const imageRef = ref(storage, imageUrl);

            // Delete the image
            await deleteObject(imageRef);
          }
        );
        // Wait for all images to be deleted
        await Promise.all(deleteImagePromises);
        // ref to product on data base
        const docRef = doc(db, "Products", selectedItem.id);
        // delete product from data base
        await deleteDoc(docRef);
        // dispatch success & update products list data
        toast("Product successfully deleted");
        window.location.reload();
      } catch (error) {
        // dispatch failures
        toast.error("There was an error deleting the product");
        console.log(error);
      } finally {
        setDelete({ isSelected: false, loading: false });
      }
    }
    // select item (display warning modal)
    else {
      setDelete((prev) => ({ ...prev, isSelected: true }));
    }
  }

  return (
    <div className="flex h-full flex-col gap-y-2 max-h-screen overflow-auto styled-scroll-bar px-2 py-1 ">
      <ProductDetails {...{ selectedItem, onModalClose, setEditShow }} />
      {/* action btn (delete product) */}
      <div className="absolute right-0 bottom-0 w-full bg-gray-50 px-2 py-2">
        <button
          onClick={deleteProduct}
          className="py-2 text-lg border-2 border-gray-900 text-gray-900 rounded-md w-full hover:bg-gray-900 hover:text-gray-50 transition-all"
        >
          Delete Product
        </button>
      </div>
      {/* edit product form (modal) */}
      <div
        className={`${
          isEdit ? "visible opacity-100" : "invisible opacity-0"
        } transition-all fixed inset-0 flex items-center justify-center px-2 `}
      >
        {isEdit && (
          <AddProduct
            onModalChange={() => setEditShow(false)}
            isEdit={true}
            selectedProduct={selectedItem}
            getProducts={getProducts}
          />
        )}
      </div>
      {/* alert modal (ask user to delete product) */}
      {isSelected && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950/80 backdrop-blur">
          <IconicWarningAlert
            title="Are you sure you want to delete this product?"
            subTitle="Cancel"
            callBack={deleteProduct}
            onClose={() => setDelete({ isSelected: false, loading: false })}
          />
        </div>
      )}
      {/* loading screen (on delete product proccess) */}
      {loading && (
        <div className="fixed inset-0 bg-gray-50 flex flex-col items-center justify-center">
          <LoaderIcon className="size-24" />
          <h4 className="text-3xl font-bold">Delete Product...</h4>
        </div>
      )}
    </div>
  );
}

export default SingleProductManage;
