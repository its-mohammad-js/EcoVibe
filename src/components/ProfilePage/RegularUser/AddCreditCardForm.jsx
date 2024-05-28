import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { generateId } from "../../../helpers/constants";
import { updateUserData } from "../../../redux/auth/regularUsers/regluarUsersSlice";

// input conditions
const inputOptions = {
  cardCode: {
    required: {
      value: true,
      message: "Please Enter Card Code",
    },
    minLength: {
      value: 19,
      message: "Code Card Must Be 19 Character At Least.",
    },
    pattern: {
      value: /^[0-9-]+$/,
      message: "Invalid Card Code Format",
    },
  },
  name: {
    required: {
      value: true,
      message: "Please Enter Your Name",
    },
    minLength: {
      value: 4,
      message: "min length is 4 character",
    },
  },
  date: {
    required: {
      value: true,
      message: "Please Select a Date",
    },
  },
  cvv: {
    required: {
      value: true,
      message: "Please Select a Date",
    },
    maxLength: {
      value: 4,
      message: "max length is 4 character",
    },
  },
  provider: {
    required: {
      value: true,
      message: "Please Select a Provider Platform.",
    },
  },
};

// provider platforms
const providers = [
  {
    label: "PayPal",
    value: {
      name: "payPal",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fpaypal%20card.jpg?alt=media&token=c64bb846-38b9-4ecc-abaf-86f5236a5c0c",
    },
  },
  {
    label: "visa card",
    value: {
      name: "visa card",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fvisa%20card.jpg?alt=media&token=4c4d17b7-00c0-4c2d-b845-c0c7583030b0",
    },
  },
];

function AddCreditCardForm({ onModalClose }) {
  // form data & hook
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  // necessary data & hooks
  const { personalInformation } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const { creditCards } = personalInformation;

  function AddCreditCard(formData) {
    const cardData = {
      ...formData,
      cardId: generateId(),
    };
    const updatedUserData = {
      ...personalInformation,
      creditCards: creditCards?.length
        ? [...creditCards, cardData]
        : [cardData],
    };

    dispatch(
      updateUserData({ data: updatedUserData, field: "personalInformation" })
    );

    onModalClose();
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center lg:py-8 max-h-[45rem]">
      {/* modal bg */}
      <div
        onClick={onModalClose}
        className="fixed inset-0 bg-gray-800/80 backdrop-blur-sm -z-10"
      ></div>
      {/* add credit card form */}
      <div className="bg-gray-50 rounded-md px-4 py-2 w-full h-full flex flex-col gap-y-4 lg:w-1/3 max-w-[40rem]">
        {/* header */}
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold">
            Add Card
            <p className="text-xs text-gray-500 font-medium">
              Add your debit/credit card
            </p>
          </h4>

          <button
            onClick={onModalClose}
            className="p-2.5 bg-gray-300 rounded-full text-xl hover:bg-gray-800 hover:text-gray-50 transition-all"
          >
            <CgClose />
          </button>
        </div>
        {/* main form */}
        <form
          onSubmit={handleSubmit((e) => AddCreditCard(e))}
          className="flex flex-col justify-stretch gap-y-4 w-full flex-1 relative"
        >
          <Input
            placeholder="XXXX-XXXX-XXXX-XXXX"
            isCode={true}
            name="cardCode"
            register={register}
            errors={errors}
            title="Card Code :"
          />

          <Input
            placeholder="John Doe"
            name="name"
            register={register}
            errors={errors}
            title="Your Name :"
          />

          <div className="grid grid-rows-1 grid-cols-2 gap-4">
            <Input
              type="month"
              name="date"
              register={register}
              errors={errors}
              title="Ex Date :"
            />

            <Input
              placeholder="XX-XX"
              type="number"
              name="cvv"
              register={register}
              errors={errors}
              title="CVV :"
            />
          </div>
          {/* provider selector */}
          <div className="">
            <h6 className="text-lg font-medium mb-1">Provider :</h6>
            <Select
              {...register("provider", inputOptions.provider)}
              options={providers}
              isSearchable={false}
              placeholder="Select a Provider"
              onChange={({ value }) => setValue("provider", value)}
            />

            <p className="text-sm px-1 mt-0.5 text-red-500">
              {errors?.provider?.message}
            </p>
          </div>

          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg bottom-0 absolute w-full">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCreditCardForm;

const Input = ({
  placeholder,
  type,
  isCode,
  register,
  name,
  errors,
  title,
}) => {
  // slice card code to XXXX-XXXX-XXXX format
  function sliceCode(value, event) {
    const slicedCode = value
      .slice(0, 19) // Limit input length
      .replace(/([0-9]{4})([0-9]{4})([0-9]{4})()/, "$1-$2-$3-$4");

    event.target.value = slicedCode;
  }

  return (
    <div className="">
      <h6 className="text-lg font-medium mb-1">{title}</h6>
      <input
        {...register(name, inputOptions[name])}
        type={type || "text"}
        onChange={(e) => isCode && sliceCode(e.target.value, e)}
        placeholder={placeholder}
        className="px-4 py-2.5 border border-gray-300 bg-white outline-none rounded-md w-full"
      />

      <p className="text-sm px-1 mt-0.5 text-red-500">
        {errors?.[name]?.message}
      </p>
    </div>
  );
};
