import Select from "react-select";

function BoxOptions({ Options, selectedOptions, setOptions }) {
  // get selected color
  const selectedColor = selectedOptions.find(
    (opt) => opt.title.toLowerCase() === "color"
  )?.option;
  // get available color
  const productColors = Options.find(
    (opt) => opt.title.toLowerCase() === "color"
  );

  // change selected options
  function onOrderChange({ title, value }) {
    // find index of selected field
    const optionsIndex = selectedOptions.findIndex(
      (opt) => opt.title.toLowerCase() === title.toLowerCase()
    );
    // take a copy from selected field
    const updatedOptions = [...selectedOptions];
    updatedOptions[optionsIndex] = { title, option: value };
    // update selected field with new option
    setOptions(updatedOptions);
  }

  return (
    <div
      className={`${
        selectedOptions.length > 1 ? "justify-between gap-4" : "justify-start"
      } flex items-center flex-wrap`}
    >
      {/* product options (only display selectable options) */}
      <div className="grid grid-cols-2 xl:flex flex-wrap gap-4 xl:z-50">
        {Options.map(
          ({ title, options }, index) =>
            title.toLowerCase() !== "color" &&
            options.length > 1 && (
              <Select
                key={index}
                options={options.map((opt) => ({ label: opt, value: opt }))}
                placeholder={title}
                className="text-sm lg:text-base min-w-36"
                onChange={({ value }) => {
                  onOrderChange({ title, value });
                }}
              />
            )
        )}
      </div>
      {/* product colors */}
      {productColors && (
        <div className="flex w-full items-center gap-4">
          <h4 className="text-xl font-medium">Colors:</h4>
          <div className="flex flex-wrap gap-2">
            {productColors?.options.map((opt, index) => (
              <button
                key={index}
                onClick={() => onOrderChange({ title: "color", value: opt })}
                style={{ backgroundColor: opt }}
                className={`${
                  selectedColor === opt && "border-4 !border-gray-400"
                } size-10 rounded-full border-4 transition-all`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BoxOptions;
