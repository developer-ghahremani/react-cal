import {
  IDatePickerContext,
  iDatePickerInitialState,
  iDatePickerReducer,
} from "./context";

import Days from "./Days";
import Month from "./Month";
import Year from "./Year";
import { useReducer } from "react";

type Props = {
  onChange: (date: Date) => void;
};

const IDatePicker = (props: Props) => {
  const [state, dispatch] = useReducer(
    iDatePickerReducer,
    iDatePickerInitialState
  );

  return (
    <IDatePickerContext.Provider value={{ state, dispatch }}>
      <div className="flex shadow-md px-2 w-full flex-col">
        <div className="flex justify-between items-center">
          <Month />
          <Year />
        </div>
        <Days onChange={props.onChange} />
      </div>
    </IDatePickerContext.Provider>
  );
};

export default IDatePicker;
