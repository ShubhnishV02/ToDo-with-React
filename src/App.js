import { useState } from 'react';
import './App.css';

function App() {

  let [toDoList, setToDoList] = useState([])


  let saveToDo = (event) => {
    event.preventDefault();

    let todoname = event.target.todoname.value;
    if (todoname === ""){
      alert("Please write something to add");

    }else if (!toDoList.includes(todoname)) {
      let finalToDoList = [...toDoList, todoname]
      setToDoList(finalToDoList)

    }else {
      alert('ToDo name already exist...');
    }



  };

  let list = toDoList.map((value, index) => {
    return (
      <ToDoListItem value={value} key={index} indexNumber={index} toDoList={toDoList} setToDoList={setToDoList}  />
    )
  });

  return (
    
    <div className={list.length > 8 ? 'Apph' : 'App'}>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDo}>
        <input type="text" name="todoname" /> <button>ADD</button>
      </form>
      <div className='footer'>
        <h6>ToDo@2024</h6>
        <h6>Designed By Shubhnish Verma</h6>
      </div>
      <hr className='hr' />

      <div className='outerdiv'>
        <ul>
          
          {list}
        </ul>
      </div>
      
    </div>
  );
}

export default App;



function ToDoListItem({value, indexNumber, toDoList, setToDoList}){

  let [status , setStatus] = useState(false)

  let deleteRow = () => {
    let finalData = toDoList.filter((v,i) => i!==indexNumber)
    setStatus(false);
    setToDoList(finalData)
  }

  let checkStatus = () => {
    setStatus(!status);
  }

  return (<div>
    <li className={(status) ? 'completeToDo' : ""}  onClick={checkStatus}>{value} </li><h6 onClick={deleteRow}>&times;</h6>
    </div>
  )

}
