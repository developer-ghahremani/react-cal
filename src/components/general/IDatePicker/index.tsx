import moment, { Moment } from "moment-jalaali";
import { useReducer } from "react";
import {
  IDatePickerContext,
  iDatePickerInitialState,
  iDatePickerReducer,
} from "./context";
import Month from "./Month";
import Year from "./Year";

const IDatePicker = () => {
  const [state, dispatch] = useReducer(
    iDatePickerReducer,
    iDatePickerInitialState
  );
  console.log(state, "state");

  const initialDays = () => {
    const past = moment("1398/01/01", "jYYYY/jM/jD");
    const future = moment("1401/12/29", "jYYYY/jM/jD");
    let current = past;
    const years: Moment[] = [];
    const ttt: any[] = [];
    while (current <= future) {
      current = moment(current).add(1, "years");
      years.push(current);
    }
    years.forEach((y, index) => {
      ttt[index] = { year: y.year() };
      // let c = y.clone();
      // let to = y.clone().add(1, "d");
      for (let index = 0; index < 11; index++) {}
    });
  };

  return (
    <IDatePickerContext.Provider value={{ state, dispatch }}>
      <div className="flex shadow-md px-2 w-full flex-col">
        <div className="flex justify-between items-center">
          <Year />
          <Month />
        </div>
      </div>
    </IDatePickerContext.Provider>
  );
};

export default IDatePicker;
