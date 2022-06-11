import moment from "moment-jalaali";
import { LeftIcon, RightIcon } from "../../icons";
import { useIDatePickerContext } from "./context";

const Month = () => {
  const { state, dispatch } = useIDatePickerContext();
  const handleChangeMonth = (month: number) => {
    if (month === 11)
      return dispatch({
        type: "changeMonthYear",
        payload: { month: 0, year: state.selectedYear + 1 },
      });
    dispatch({
      type: "changeMonthYear",
      payload: { month: month, year: state.selectedYear },
    });
  };

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

  return (
    <div className="flex items-center">
      <LeftIcon
        size={10}
        className="arrows"
        onClick={() => handlePrevMonth(state.selectedMonth - 1)}
      />
      <p className="mx-3">
        {moment(
          `${state.selectedYear}/${state.selectedMonth + 1}/01`,
          "jYYYY/jMM/jDD"
        ).format("jMMMM")}
      </p>
      <RightIcon
        className="arrows"
        onClick={() => handleNextMonth(state.selectedMonth + 1)}
        size={10}
      />
    </div>
  );
};

export default Month;
