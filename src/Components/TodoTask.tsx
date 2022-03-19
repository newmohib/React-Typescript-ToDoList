import React from "react";
import { ITask } from "../interfaces";

interface TaskDetails{
    task: ITask;
    completeTask( taskNameToDelete: string ): void;
};

 const TodoTask = ({task, completeTask}: TaskDetails ) => {
     //console.log({props})
    return (
        <div className="task">
            <div className="content">
                <span>{task?.taskName}</span>
                <span>{task?.deadline}</span>
            </div>
            <button onClick={()=>{
                completeTask( task?.taskName)
            }}>X</button>
        </div>
    )

}

export default TodoTask;