import { LeftIcon, RightIcon } from "../../icons";
import React, { ChangeEvent, useCallback } from "react";

import ISelect from "../ISelect";
import { persianYears } from "./constants";
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
      <RightIcon
        className="arrows"
        size={10}
        onClick={() => handleChangeYear(state.selectedYear + 1)}
      />
      <ISelect
        className="appearance-none"
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          handleChangeYear(+event.target.value)
        }
        value={state.selectedYear.toString()}
        options={persianYears.map((item) => ({
          label: item.toString(),
          value: item.toString(),
        }))}
      />
      {/* <p className="mx-3">{state.selectedYear}</p> */}
      <LeftIcon
        className="arrows"
        onClick={() => handleChangeYear(state.selectedYear - 1)}
        size={10}
      />
    </div>
  );
};

export default Year;
