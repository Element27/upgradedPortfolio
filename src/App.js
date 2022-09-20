import MainDisplay from "./components/MainDisplay";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="flex flex-wrap text-white font-Nunito max-w-[1420px] bg-[#5e42a6]">
      <SideBar />
      <MainDisplay />

    </div>
  );
}

export default App;
