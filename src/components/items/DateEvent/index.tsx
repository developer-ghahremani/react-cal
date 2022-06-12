import DateEventModel from "../../../models/DateEvent.model";
import { Moment } from "moment";
import { persianMonths } from "../../general/IDatePicker/constants";

type Props = {
  currentDate: Moment;
  dateEvent: DateEventModel;
  index: number;
};

const DateEvent = (props: Props) => {
  return (
    <p
      style={{ animationDelay: `${props.index / 2}s` }}
      className={`animate__animated animate__fadeInUp ${
        props.dateEvent.dayoff ? "text-green-700" : ""
      }`}>{`${props.currentDate.format("jDD")} ${
      persianMonths[+props.currentDate.format("jM") - 1]
    } ${props.dateEvent.occasion} ${
      !props.dateEvent.year ? "" : `/ سال ${props.dateEvent.year}`
    } ${props.dateEvent.dayoff ? "/ تعطیل" : ""} `}</p>
  );
};

export default DateEvent;
