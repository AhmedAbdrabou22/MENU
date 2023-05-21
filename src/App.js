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

  const filterSearch = (word)=>{
    if(word !== ""){
      const newItemsDataArray1 = data.filter((itemData)=> itemData.title === word)
      setDataItems(newItemsDataArray1)
    }else{
      setDataItems(data)
    }
  }

  //Filter Buttons By Category
    let newArraybtns = ["الكل",...new Set (data.map((itemData)=>{return (itemData.category);}))]

  return (
    <div className="App">
      <NavBar filterSearch={filterSearch}/>
      <div className="container">
        <FodPart/>
        <Category filterData={filterByCategory} filterCategory={newArraybtns}/>
        <Cards  items={dataItems}/>
      </div>
    </div>
  );
}

export default App;
