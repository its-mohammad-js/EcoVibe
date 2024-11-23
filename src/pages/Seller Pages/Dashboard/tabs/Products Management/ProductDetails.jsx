import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiEdit } from "react-icons/bi";
import AddProduct from "../../modals/Add Product Modal/AddEditProductForm";
import { useNavigate } from "react-router-dom";
import { loadingIcon } from "constants";
import toast from "react-hot-toast";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "src/config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "src/reducers/products/productsSlice";
import IconicWarningAlert from "UI/Alerts/IconicAlert";

function ProductDetails({ selectedItem, onModalClose, getProducts }) {
  // description state
  const [fullDescription, setDescription] = useState(false);
  // edit modal state
  const [isEdit, setEditShow] = useState(false);
  const [{ loading, isSelected }, setDelete] = useState({
    isSelected: false,
    loading: false,
  });
  // necessary data & hooks
  const imageGalleryRef = useRef();
  const { userId } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function deleteProduct() {
    // delete product if user confirmed
    if (isSelected) {
      try {
        // display loading screen
        setDelete((prev) => ({ ...prev, loading: true }));
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
      {/* thumnail & title */}
      <div className="w-full bg-gray-200 rounded-md relative">
        <img
          src={selectedItem?.Thumbnail}
          alt="product-thumbnail"
          className="w-full object-cover rounded-md h-64"
        />
        <button
          onClick={() =>
            onModalClose({ modalIsShow: false, selectedItem: null })
          }
          className="absolute p-2 bg-gray-500/80 text-gray-50 rounded-full text-3xl top-2 left-2"
        >
          <BiChevronLeft />
        </button>
        <button
          onClick={() => setEditShow(true)}
          className="absolute p-2 bg-primary-500/80 text-gray-50 rounded-full text-3xl top-2 right-2"
        >
          <BiEdit />
        </button>
        <div className="absolute bottom-0 shadow-inner w-full px-4 py-2">
          <h4 className="text-2xl font-bold text-gray-50 bg-gray-700/20 backdrop-blur-sm px-1 w-fit">
            {selectedItem?.Name}
          </h4>
          <p className="bg-gray-700 w-fit text-gray-50 bg-gray-700/20 backdrop-blur-sm px-1">
            {selectedItem?.Category}
          </p>
        </div>
      </div>
      {/* description & price */}
      <div className="flex flex-col gap-y-1 my-2 items-start">
        <h6 className="text-3xl font-bold">Description</h6>
        {/* description */}
        <p
          className={`${
            fullDescription ? "line-clamp-none" : "line-clamp-4"
          } transition-all w-full`}
        >
          {selectedItem?.Description}
        </p>
        <button
          onClick={() => setDescription((prev) => !prev)}
          className={`${
            selectedItem?.Description.length < 240 && "hidden"
          } text-primary-500 font-semibold`}
        >
          {fullDescription ? "Less" : "Show More..."}
        </button>
        <h6 className="text-xl font-semibold">Price: {selectedItem?.Price}</h6>
      </div>
      {/* images gallery */}
      <div className="relative flex items-center justify-start">
        <button
          onClick={() => (imageGalleryRef.current.scrollLeft -= 200)}
          className="absolute left-0 mb-1.5 p-1 opacity-50 hover:opacity-100 transition-all bg-primary-800 rounded-full text-2xl text-gray-50"
        >
          <BiChevronLeft />
        </button>
        <div
          ref={imageGalleryRef}
          className="w-full overflow-x-scroll scroll-smooth hidden-scroll-bar md:px-4 my-4"
        >
          <div className="inline-flex items-center gap-5">
            {selectedItem?.Images.map((url, index) => (
              <div key={index} className="size-20 bg-gray-300 rounded-md">
                <img src={url} className="size-full rounded-md object-cover" />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => (imageGalleryRef.current.scrollLeft += 200)}
          className="absolute right-0 mb-1.5 p-1 opacity-50 hover:opacity-100 transition-all bg-primary-800 rounded-full text-2xl text-gray-50"
        >
          <BiChevronRight />
        </button>
      </div>
      {/* options list */}
      <div className="flex flex-col gap-y-2 mb-4">
        {selectedItem?.Options.map(({ title, options }, index) => (
          <div key={index} className="flex items-start justify-between gap-2">
            <h4 className="text-lg lg:text-lg font-bold">{title}:</h4>
            <div className="flex items-center gap-x-1 flex-wrap w-2/3">
              {options.map((op, i) => (
                <span key={i} className="text-sm lg:text-base">
                  {op},
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* tags list */}
      <div className="flex items-start justify-start gap-2 mb-20">
        {selectedItem?.Tags?.length > 0 &&
          selectedItem?.Tags.map((tag, index) => (
            <button
              onClick={() => navigate(`/EcoVibe/Explore-products/tags=${tag}`)}
              key={index}
              className="px-2.5 py-1 bg-primary-500 text-gray-50 rounded-md border border-gray-50 hover:text-primary-500 hover:bg-gray-50 transition-all hover:border-primary-500"
            >
              #{tag}
            </button>
          ))}
      </div>
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
          <img src={loadingIcon} alt="laoding-icon" className="size-24" />
          <h4 className="text-3xl font-bold">Delete Product...</h4>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
