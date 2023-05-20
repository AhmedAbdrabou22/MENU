import NavBar from "./components/navBar";
import FodPart from "./components/foddpart";
import Category from "./components/Category";
import Cards from "./components/Cards";
import data from "./components/data";
import { useState } from "react";
function App() {
  const [dataItems , setDataItems] = useState(data)
  const filterByCategory = (cat)=>{
    const newItemsDataArray = data.filter((itemData)=> itemData.category === cat)
    if(cat === "الكل"){
      setDataItems(data)
    }else{
      setDataItems(newItemsDataArray)
    }

  }
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <FodPart/>
        <Category filterData={filterByCategory}/>
        <Cards  items={dataItems}/>
      </div>
    </div>
  );
}

export default App;
