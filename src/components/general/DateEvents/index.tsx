import { EventCategory, dateEventCategories } from "./constant";
import React, { ChangeEvent, useState } from "react";

import { DateEventItem } from "../../items";
import ILoading from "../ILoading";
import ISelect from "../ISelect";
import moment from "moment-jalaali";
import { useGetDateEventsQuery } from "../../../store/serivce/dateEvents";

type Props = { date: Date };

const DateEvents = (props: Props) => {
  const date = moment(props.date);

  const [eventCategory, setEventCategory] = useState<string>(
    EventCategory.Iran
  );

  const handleChangeCategory = (params: ChangeEvent<{}>) => {
    // setEventCategory(params.target.value);
  };

  const { isFetching, data, isError } = useGetDateEventsQuery({
    day: date.jDate(),
    month: date.jMonth() + 1,
    category: eventCategory,
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl text-primary font-bold">مناسبت ها</p>
        {/* <ISelect
          value={eventCategory}
          onChange={handleChangeCategory}
          options={dateEventCategories}
        /> */}
      </div>

      {isFetching && <ILoading />}
      {!isFetching && (!data || data?.values.length === 0) && (
        <p>مناسبتی یافت نشد</p>
      )}
      {!isFetching &&
        data &&
        data.values.length > 0 &&
        data.values.map((item, index) => (
          <DateEventItem index={index} currentDate={date} dateEvent={item} />
        ))}
    </div>
  );
};

export default DateEvents;
