import logo from "./assets/logo.png";
import "./App.css";
import travelPlansData from "./assets/travel-plans.json";
import { useState } from "react";
import TravelList from "./components/TravelList";
function App() {
  const [dataState, setDataState] = useState(travelPlansData);
  function handleDeletePlan(planId) {
    console.log("plan deleted", planId);
    const filterData = dataState.filter((currentElement) => {
      if (currentElement.id === planId) {
        return false;
      } else {
        return true;
      }
    });
    setDataState(filterData);
  }
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList
        data={dataState}
        test="test"
        handleDeletePlan={handleDeletePlan}
      />
    </>
  );
}

export default App;
//props
// {
//   data: dataState,
//   test: 'test'
//   handleDeletePlan: handleDeletePlan
// }
