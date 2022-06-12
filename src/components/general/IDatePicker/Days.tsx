import React, { useEffect } from "react";
import moment, { Moment } from "moment-jalaali";

import { getPersianMoment } from "../../../utils/iMoment";
import { useIDatePickerContext } from "./context";

const Days = () => {
  const { state } = useIDatePickerContext();

  useEffect(() => {
    // initialDays();
  }, [state.selectedMonth, state.selectedYear]);

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
      //   currentM = t.jMonth();
    }

    return arr;
  };

  return (
    <div className="grid grid-cols-7 gap-2 my-4">
      {[
        ...initialDays().filter(
          (item) => item.jMonth() === state.selectedMonth
        ),
      ].map((item, index) => (
        <div
          key={item.toISOString()}
          style={{
            gridColumnStart: +item.format(`d`) + 1,
            animationDelay: `${index / 15}s`,
          }}
          className={`border flex rounded-lg border-gray-dark justify-center items-start p-1 animate__animated animate__fadeInUp`}>
          {item.format(`jDD`)}
        </div>
      ))}
    </div>
  );
};

export default Days;
// col-start-${item.format(
//   `d`
// )}
