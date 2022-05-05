import React,{useState} from "react";

function App() {

  const [itemName,setItemName] =useState("");
const [items,setItems] = useState([]);

  function handleChange(event){

    const {name,value} = event.target;

        setItemName(value);
       // console.log(itemName);
  }
  function addListItem(){
    setItems((prevItems) => {
        return[
          ...prevItems,
          itemName
        ];
        setItemName("");

    })
      
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange}  type="text" />
        <button onClick={addListItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        {items.map((item)=>{
            return(<li>{item}</li>);
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
