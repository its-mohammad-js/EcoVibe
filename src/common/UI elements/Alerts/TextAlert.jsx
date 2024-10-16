function TextAlert({
  action,
  backTitle,
  sureTitle,
  message,
  closeModal,
  submitCallBack,
}) {
  return (
    <div className="bg-gray-50 px-4 py-2 rounded-md flex flex-col gap-y-2 w-80 lg:w-96 xl:w-[30rem]">
      <h4 className="text-lg xl:text-2xl font-bold">
        {action ? action : "Alert"}
      </h4>

      <p className="line-clamp-6">{message ? message : "Are You Sure?"}</p>

      <div className="flex items-center justify-end gap-x-2">
        <button
          onClick={() => closeModal()}
          className="px-4 py-2 text-lg hover:bg-gray-200 transition-all rounded-md"
        >
          {backTitle ? backTitle : "Cancel"}
        </button>
        <button
          onClick={() => {
            submitCallBack();
            closeModal();
          }}
          className="px-4 py-2 text-lg hover:bg-gray-200 transition-all rounded-md"
        >
          {sureTitle ? sureTitle : "Im Sure"}
        </button>
      </div>
    </div>
  );
}

export default TextAlert;
