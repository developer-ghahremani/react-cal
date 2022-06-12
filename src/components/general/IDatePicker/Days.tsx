import { DayItem } from "../../items";
import { Moment } from "moment-jalaali";
import { getPersianMoment } from "../../../utils/iMoment";
import { persianWeekDays } from "./constants";
import { useIDatePickerContext } from "./context";

type Props = {
  onChange: (date: Date) => void;
};

const Days = (props: Props) => {
  const { state, dispatch } = useIDatePickerContext();

  const initialDays = (): Moment[] => {
    const fromDate = getPersianMoment(
      `${state.selectedYear}/${state.selectedMonth + 1}/01`
    );
    const toDate = fromDate.clone().add(1, "month");
    const arr = [];
    let currentDate = fromDate.clone();
    while (currentDate <= toDate) {
      arr.push(currentDate.clone());
      currentDate = currentDate.clone().add(1, "days");
    }

    return arr;
  };

  const handleSelectDay = (day: Moment) => {
    props.onChange(day.toDate());
    dispatch({ type: "changeSelectedDay", payload: day });
  };

  return (
    <div className="grid grid-cols-7 gap-2 my-4">
      {persianWeekDays.map((item, index) => (
        <div key={item + index}>
          <p className="text-xs text-gray-dark text-center">{item}</p>
        </div>
      ))}
      {[...initialDays()]
        .filter((item) => item.jMonth() === state.selectedMonth)
        .map((item, index) => (
          <DayItem
            onClick={handleSelectDay}
            day={item}
            index={index}
            selectedDay={state.selectedDay}
          />
        ))}
    </div>
  );
};

export default Days;
