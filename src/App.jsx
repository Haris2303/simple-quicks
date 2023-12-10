import { useState } from "react";
import ButtonCircle from "./components/ButtonCircle";
import "./index.css";

const App = () => {
  const [isOpenInboxTask, setIsOpenInboxTask] = useState(false);

  return (
    <div className="relative">
      <div
        className="absolute right-5 top-[37rem]"
        onClickCapture={() => setIsOpenInboxTask(!isOpenInboxTask)}
      >
        <ButtonCircle />
      </div>
      {isOpenInboxTask && (
        <div className="absolute right-20 top-[37rem]">
          <ButtonCircle />
        </div>
      )}
    </div>
  );
};

export default App;
