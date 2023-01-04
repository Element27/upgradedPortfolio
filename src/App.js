import { BrowserRouter } from "react-router-dom";
import MainDisplay from "./components/MainDisplay";
import SideBar from "./components/SideBar";



function App() {
  return (
    <BrowserRouter>

      <div className="flex flex-wrap text-white font-Nunito max-w-[1420px] bg-[#5e42a6]">
        {/* <SideBar /> */}
        <SideBar> </SideBar>
        <MainDisplay />

      </div>
    </BrowserRouter>
  );
}

export default App;
