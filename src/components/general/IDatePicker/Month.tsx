import { LeftIcon, RightIcon } from "../../icons";

import { ChangeEvent } from "react";
import ISelect from "../ISelect";
import { getPersianMoment } from "../../../utils/iMoment";
import { months } from "moment";
import { persianMonths } from "./constants";
import { useIDatePickerContext } from "./context";

const Month = () => {
  const { state, dispatch } = useIDatePickerContext();

  const handleNextMonth = (month: number) => {
    if (month === 12)
      return dispatch({
        type: "changeMonthYear",
        payload: { month: 0, year: state.selectedYear + 1 },
      });
    dispatch({
      type: "changeMonthYear",
      payload: { month, year: state.selectedYear },
    });
  };

  const handlePrevMonth = (month: number) => {
    if (month === -1)
      return dispatch({
        type: "changeMonthYear",
        payload: { month: 11, year: state.selectedYear - 1 },
      });
    dispatch({
      type: "changeMonthYear",
      payload: { month, year: state.selectedYear },
    });
  };

  const handleChangeMonth = ({ target }: ChangeEvent<{}>) => {
    dispatch({
      type: "changeMonthYear",
      payload: { month: +target.value, year: state.selectedYear },
    });
  };

  return (
    <div className="flex items-center">
      <RightIcon
        className="arrows"
        onClick={() => handleNextMonth(state.selectedMonth + 1)}
        size={10}
      />
      <ISelect
        className="appearance-none"
        onChange={handleChangeMonth}
        value={state.selectedMonth.toString()}
        options={persianMonths.map((item, index) => ({
          label: item,
          value: index.toString(),
        }))}
      />

      <LeftIcon
        size={10}
        className="arrows"
        onClick={() => handlePrevMonth(state.selectedMonth - 1)}
      />
    </div>
  );
};

export default Month;
