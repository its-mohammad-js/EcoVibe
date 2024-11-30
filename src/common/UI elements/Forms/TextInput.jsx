const TextInput = (props) => {
  const {
    placeholder,
    register,
    onChange,
    error,
    style,
    type,
    disabled,
    id,
    label,
  } = props;

  return (
    <div className={`${style} w-full h-12`}>
      <label
        htmlFor={id}
        className="font-semibold xl:text-lg text-gray-800 hover:text-gray-950 transition-all"
      >
        <p className="first-letter:uppercase">{label}</p>
      </label>

      <input
        {...register}
        onChange={onChange}
        id={id}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={`placeholder:first-letter:uppercase size-full outline-none mt-1 px-4 py-2 order-2 disabled:animate-pulse bg-transparent border border-gray-300 hover:border-gray-400 transition-all group focus:!border-gray-500 rounded-lg`}
      />

      {error && (
        <p className="text-sm md:text-base mt-1 px-1 text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
