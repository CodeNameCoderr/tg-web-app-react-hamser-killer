import { TASK_ROUTE } from "../../utils/consts";
import "./TaskItem.css";
import {useNavigate} from 'react-router-dom';

const TaskItem= ({task}) => {

    let navigate = useNavigate();
    function handleClick() {
        navigate(TASK_ROUTE + '/' + task.id);
    }

    console.log("Вот");

    return ( 
        
        <div className="task_item_block" onClick={handleClick}>
        <img className="task_item_image" src={task.image}/>
        {task.title}
        </div>
    
     );
};

export default TaskItem;