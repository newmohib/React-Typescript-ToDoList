import React,{ FC, useState,ChangeEvent } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './interfaces';

const App: FC = ()=> {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [toDoList, setToDoList] = useState<ITask[]>([]);

  const handleChange =(event: ChangeEvent<HTMLInputElement>):void =>{
    let {name, value} = event.target;
console.log(name, value)
    if (name === "task") {
      setTask(value);
    } else {
      setDeadline(Number(value));
      
    }

  };

  const addTask = (): void =>{
    const newTask = {taskName:task, deadline:deadline};
    setToDoList([...toDoList, newTask]);
    console.log(toDoList);
    setTask("");
    setDeadline(0)

  };

  const completeTask  = (taskNameToDelete:string): void =>{
    console.log({taskNameToDelete})
    setToDoList(toDoList.filter((task)=>{
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    // <div className="App">
    //   <div className="App-header">
    //     <div className='todoList'> To Do List</div>
    //   </div>
    // </div>

    

    <div className="App">
        <div className='header'>
          <div className='inputContainer'>
            <input name='task' value={task} onChange={handleChange}  type="text" placeholder='Task...' />
            <input  name='deadline' value={deadline} onChange={handleChange} type="number" placeholder='Deadline (in Days)...' />

          </div>
          <button onClick={addTask} type="submit">Add Task</button>
        </div>
        <div className='todoList'>
          {
            toDoList.map((task: ITask, key) =>{
              return <TodoTask key={key} task={task} completeTask={completeTask}  />
            })
          }
        </div>
    </div>
  );
}

export default App;
