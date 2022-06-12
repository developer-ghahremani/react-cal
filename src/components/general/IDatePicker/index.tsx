import {
  IDatePickerContext,
  iDatePickerInitialState,
  iDatePickerReducer,
} from "./context";
import moment, { Moment } from "moment-jalaali";

import Days from "./Days";
import Month from "./Month";
import Year from "./Year";
import { useReducer } from "react";

const IDatePicker = () => {
  const [state, dispatch] = useReducer(
    iDatePickerReducer,
    iDatePickerInitialState
  );

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
        <Days />
      </div>
    </IDatePickerContext.Provider>
  );
};

export default IDatePicker;
