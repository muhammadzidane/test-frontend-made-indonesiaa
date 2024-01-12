// Components
import { HomeRadioForm, HomeStep } from "./components";

const HomeIndex: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div>
        <HomeStep />
        <HomeRadioForm />
      </div>
    </div>
  );
};

export default HomeIndex;
