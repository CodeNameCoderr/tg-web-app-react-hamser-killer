import React from "react";
import TaskListComp from "../components/TaskListComp/TaskListComp";
import './TaskList.css'

const TaskList = () => {
    return (
        <div className="task_list_block">
            
        <h2>Задания</h2>
        <TaskListComp/>
        
        </div>
    );
};

export default TaskList;