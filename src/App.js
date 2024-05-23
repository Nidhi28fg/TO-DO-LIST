import "./styles.css";
import { useState } from "react";

export default function App() {
  let [todolistarray, setTodolistarray] = useState([]);
  let todolist = (event) => {
    event.preventDefault();
    let aarrayn = event.target.arrayn.value;
    if (!todolistarray.includes(aarrayn)) {
      let finallist = [...todolistarray, aarrayn];
      setTodolistarray(finallist);
    } else {
      alert("This do list already included");
    }
    event.target.arrayn.value = " ";
  };

  let list = todolistarray.map((value, index) => {
    return (
      <Todolistrow
        value={value}
        key={index}
        indexNumber={index}
        todolistarray={todolistarray}
        setTodolistarray={setTodolistarray}
      />
    );
  });

  return (
    <div className="App">
      <div className="todolistt">
        {" "}
        <h1>
          <b>
            {" "}
            <u> ADD - TO DO LIST </u>
          </b>
        </h1>
        <div className="dov">
          {" "}
          <form action="" onSubmit={todolist}>
            <h2>
              <input type="text" name="arrayn" /> <button> Add</button>
            </h2>
            <ul>{list}</ul>
          </form>
        </div>
      </div>
    </div>
  );
}

function Todolistrow({ value, indexNumber, todolistarray, setTodolistarray }) {
  let [linethrough, setLinethrough] = useState(false);
  const finaldata = () => {
    let fnaldata = todolistarray.filter((v, i) => i !== indexNumber);
    setTodolistarray(fnaldata);
  };

  return (
    <li
      className={linethrough ? "activedata" : "finaldata"}
      onClick={() => setLinethrough(!linethrough)}
    >
      {" "}
      {indexNumber + 1}
      {value}
      <span onClick={finaldata}>X</span>
    </li>
  );
}
