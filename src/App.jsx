import { Route, Routes } from "react-router-dom";
import { SignIn, SignUP } from "./page";

const App = () => {
  return (
    <div className="w-screen h-screen ">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUP />} />
      </Routes>
    </div>
  );
};

export default App;
