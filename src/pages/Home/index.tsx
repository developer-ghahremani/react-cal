import { DateEvents } from "../../components/general";
import { IDatePicker } from "../../components/general";
import { MainLayout } from "../../components/layout";
import { useState } from "react";

const Home = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const handleChangeDate = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <MainLayout>
      <div className="h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="order-last md:order-first">
            <DateEvents date={currentDate} />
          </div>
          <IDatePicker onChange={handleChangeDate} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
