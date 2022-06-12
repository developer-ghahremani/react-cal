import { IDatePicker } from "../../components/general";
import { MainLayout } from "../../components/layout";

const Home = () => {
  // return (
  //   <div className="grid grid-cols-10  gap-2">
  //     <div className="bg-red-700 h-48 col-start-3"></div>
  //   </div>
  // );
  return (
    <MainLayout>
      <div className="grid grid-cols-2 w-full h-screen items-center">
        <IDatePicker />
      </div>
    </MainLayout>
  );
};

export default Home;
