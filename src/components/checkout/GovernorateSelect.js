"use client";

import { governorates } from "@/data/governoratesDate";
import { useState } from "react";

function GovernorateSelect() {
  const [selected, setSelected] = useState("");
  return (
    <div className="relative">
      <select
        name="governorate"
        id="governorate"
        className=" w-full px-3 pt-5 pb-1.75 border border-primary text-formInput"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        required
      >
        <option value="" disabled hidden></option>

        {governorates.map((option) => (
          <option value={option} key={option} className="pt-4">
            {option}
          </option>
        ))}
      </select>
      <label
        htmlFor="governorate"
        className={`absolute transition-all ease-out text-text-muted ${selected === "" ? "top-4 text-formInput left-3" : "left-3 top-1.75 text-xs"}`}
      >
        governorate
      </label>
    </div>
  );
}

export default GovernorateSelect;
