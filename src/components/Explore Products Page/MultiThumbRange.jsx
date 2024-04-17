import { useCallback, useEffect, useState, useRef } from "react";

const MultiRangeSlider = ({ min, max, onChange }) => {
  // value of range inputs
  const [{ minVal, maxVal }, setRange] = useState({
    minVal: min,
    maxVal: max,
  });
  // ref to range inputs
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  // ref to div.range
  const range = useRef(null);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // on range change handler
  function changeInputHandler({ target }) {
    if (target.name === "maxVal") {
      if (target.value <= minVal) return;
    }
    if (target.name === "minVal") {
      if (target.value >= maxVal) return;
    }
    // set range state
    setRange((prev) => ({ ...prev, [target.name]: Number(target.value) }));
    const minPercent = getPercent(minValRef.current.value);
    const maxPercent = getPercent(maxVal);
    // set width & postion of div.range and pass min & max values to onchange function
    if (range.current && minValRef.current && maxValRef.current)
      switch (target.name) {
        case "minVal":
          range.current.style.left = `${minPercent}%`;
          range.current.style.width = `${maxPercent - minPercent}%`;
          onChange({ min: Number(target.value), max: maxVal });
          break;
        case "maxVal":
          range.current.style.width = `${maxPercent - minPercent}%`;
          onChange({ min: minVal, max: Number(target.value) });
          break;
        default:
          break;
      }
  }

  return (
    <div className="slider__wrapper relative">
      <input
        type="range"
        name="minVal"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={changeInputHandler}
        className="thumb thumb--zindex-3 thumb--zindex-5"
      />
      <input
        type="range"
        name="maxVal"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={changeInputHandler}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range w-full" />
      </div>
    </div>
  );
};

export default MultiRangeSlider;
