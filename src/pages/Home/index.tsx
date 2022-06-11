import { IDatePicker } from "../../components/general";
import { MainLayout } from "../../components/layout";

const Home = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-2 w-full h-screen items-center">
        <IDatePicker />
      </div>
    </MainLayout>
  );
};

export default Home;
