import "./TaskItem.css";
import { observer } from "mobx-react-lite";



const TaskItem= ({task}) => {

    return ( 
        
        <div >
         {task.title}
        </div>
    
     );
};

export default TaskItem;