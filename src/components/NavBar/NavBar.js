import "./NavBar.css";
import playIcon from "../../img/main/playicon.png"
import { GAME_ROUTE, TASK_LIST_ROUTE, ADMIN_ROUTE } from "../../utils/consts";
import {Context} from "../../index";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";



const NavBar = observer(() => {
    const {user} = useContext(Context)
    console.log(user);
    return ( 
        
        <div >
            {user.isAuth ? 
            <div className="navBar_block">
            <div className="navBar_links">
            <div className="navBar_link_block">
                <a href={ GAME_ROUTE } className="navBar_link_item">
                <img src={playIcon} alt="playIcon" className="navBar_link_icon" />
                Игра</a>
            </div>
            <div className="navBar_link_block">
                <a href={TASK_LIST_ROUTE} className="navBar_link_item">
                <img src={playIcon} alt="playIcon" className="navBar_link_icon" />
                Задания</a>
            </div>
           
            <div className="navBar_link_block">
                <a href={ADMIN_ROUTE} className="navBar_link_item">
                <img src={playIcon} alt="playIcon" className="navBar_link_icon" />
                Админ панель</a>
            </div>
            <div className="navBar_link_block">
            <a href="" className="navBar_link_item">
                <img src={playIcon} alt="playIcon" className="navBar_link_icon" />
                Пригласить</a>
            </div>
        </div>
            </div>
            :
            <h1 className="unAuthorised"></h1>
            }
            
            
        </div>
    
     );
});

export default NavBar;