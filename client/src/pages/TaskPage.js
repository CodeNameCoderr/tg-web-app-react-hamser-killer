import React from "react";
import './TaskPage.css'
import coinIcon from "../img/main/playicon.png"
import {NavLink} from "react-router-dom";
import { TASK_LIST_ROUTE } from "../utils/consts";

const TaskPage = () => {
    const task =  {
        "isActive": true,
        "id": 1,
        "title": "Тестовое название 1",
        "description": "Полное описание3",
        "shortDescription": "Краткое описание3",
        "link": "vk.com3",
        "price": "1980000000",
        "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        "updatedAt": "2024-07-28T03:23:30.910Z",
        "createdAt": "2024-07-28T03:23:30.910Z"
    };
    return (
        <div className="taskBlock">
            <div className="goBack_block">
            <NavLink to={ TASK_LIST_ROUTE }  className="goBack_item">← Назад</NavLink>
            </div>
            <img className="taskBlock_icon" src={task.image} alt="Вот такая картиночка"/>
            <div className="task_title_block">
                {task.title}
            </div>
            <div className="task_desription_block">
                {task.description}
            </div>
            <div className="plus">
            <img src={coinIcon} alt="coinIcon" className="task_profit_icon" />
              + {task.price}
            </div>

            <a className="task_button" href={task.link}>Ссылка</a>
            
        </div>
    );
};

export default TaskPage;