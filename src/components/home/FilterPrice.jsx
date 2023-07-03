import React from "react";
import { useForm } from "react-hook-form";

const FilterPrice = ({ setPriceMinMax }) => {
  const { register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from;
    const max = data.to.trim() === "" ? Infinity : +data.to;

    setPriceMinMax({ min, max });
  };

  return (
    <article>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="from">From</label>
          <input {...register("from")} type="number" id="from" />
        </div>
        <div>
          <label htmlFor="to">To </label>
          <input {...register("to")} type="number" id="to" />
        </div>
        <button>Filter price</button>
      </form>
      <p></p>
    </article>
  );
};

export default FilterPrice;
