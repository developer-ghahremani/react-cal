import moment, { Moment } from "moment";

type Props = {
  day: Moment;
  selectedDay?: Moment;
  index: number;
  onClick?: (day: Moment) => void;
};

const DayItem = (props: Props) => {
  const handleClick = () => {
    props.onClick && props.onClick(props.day);
  };

  return (
    <div
      onClick={handleClick}
      key={props.day.toISOString()}
      style={{
        gridColumnStart:
          +props.day.format(`d`) === 6 ? 1 : +props.day.format(`d`) + 2,
        animationDelay: `${props.index / 15}s`,
      }}
      className={`day-item animate__animated animate__fadeInUp ${
        props.day.format("YYYY-MM-DD") ===
        props.selectedDay?.format("YYYY-MM-DD")
          ? "selected-day"
          : props.day.isBefore(moment())
          ? "bg-gray-dark bg-opacity-20 text-gray-dark"
          : "shadow-sm"
      }`}>
      {props.day.format(`jDD`)}
    </div>
  );
};

export default DayItem;
