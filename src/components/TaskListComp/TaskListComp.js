import "./TaskListComp.css";
import TaskItem from "../TaskItem/TaskItem";
import { observer } from "mobx-react-lite";
import {Context} from "../../index";
import React, { useContext } from "react";


const TaskListComp = observer(() => {
    const {task} = useContext(Context);
    console.log(task.tasks);

    return ( 
        
        <div >
         {task.tasks.map(task => 
            <TaskItem key={task.id} task={task}/>
        )}
        </div>
    
     );
});

export default TaskListComp;