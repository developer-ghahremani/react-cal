import { LeftIcon, RightIcon } from "../../icons";
import React, { useCallback } from "react";

import { useIDatePickerContext } from "./context";

const Year = () => {
  const { state, dispatch } = useIDatePickerContext();

  const handleChangeYear = useCallback((year: number) => {
    dispatch({
      type: "changeMonthYear",
      payload: { month: state.selectedMonth, year: year },
    });
  }, []);

  return (
    <div className="flex items-center">
      <LeftIcon
        className="arrows"
        onClick={() => handleChangeYear(state.selectedYear - 1)}
        size={10}
      />
      <p className="mx-3">{state.selectedYear}</p>
      <RightIcon
        className="arrows"
        size={10}
        onClick={() => handleChangeYear(state.selectedYear + 1)}
      />
    </div>
  );
};

export default Year;
