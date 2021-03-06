import { createContext, useContext } from "react";
import moment, { Moment } from "moment-jalaali";

interface IDatePickerStateInterface {
  selectedYear: number;
  selectedMonth: number;
  selectedDay: Moment;
}

type IDatePickerActions =
  | {
      payload: { month: number; year: number };
      type: "changeMonthYear";
    }
  | {
      payload: Moment;
      type: "changeSelectedDay";
    };

export const iDatePickerInitialState: IDatePickerStateInterface = {
  selectedMonth: moment().jMonth(),
  selectedYear: moment().jYear(),
  selectedDay: moment(),
};

export const iDatePickerReducer = (
  state = iDatePickerInitialState,
  { payload, type }: IDatePickerActions
): IDatePickerStateInterface => {
  switch (type) {
    case "changeMonthYear":
      return {
        ...state,
        selectedYear: payload.year,
        selectedMonth: payload.month,
      };

    case "changeSelectedDay":
      return { ...state, selectedDay: payload };

    default:
      return state;
  }
};

export const IDatePickerContext = createContext({
  state: iDatePickerInitialState,
  dispatch: (action: IDatePickerActions) => {},
});

export const useIDatePickerContext = () => useContext(IDatePickerContext);
