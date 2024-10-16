import OrdersList from "./OrdersList";
import SendLocation from "./SendLocation";
import ShareProduct from "./ShareProduct";

function ShareContentModal({ onCloseModal, type }) {
  if (type)
    return (
      <div className="w-80 h-[90vh] lg:size-96">
        {type === "order" ? (
          <OrdersList onCloseModal={onCloseModal} />
        ) : type === "location" ? (
          <SendLocation onCloseModal={onCloseModal} />
        ) : (
          <ShareProduct onCloseModal={onCloseModal} />
        )}
      </div>
    );
}

export default ShareContentModal;
