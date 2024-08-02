import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import loadingScreen from "../img/loading-screen.png";
import "./Auth.css";
import { MAIN_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userApi";
import { useTelegram } from "../hooks/useTelegram";
import {Context} from "../index";
import { observer } from "mobx-react-lite";


const Auth = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const {userNameHook, tgIdHook} = useTelegram();
    console.log("Я ПЫТАЮСЬ")
            const click = async () => {
                try {
                    let data;
                    data = await registration(tgIdHook, userNameHook);
                    data = await login(tgIdHook, userNameHook);
                    user.setUser(user);
                    user.setIsAuth(true);
                    navigate(MAIN_ROUTE);
                    console.log(user.isAuth);
                    console.log(data);

                    } catch (e) {
                        console.log(e)
                        if(e.response.data.message === "Пользователь с таким telegramId уже существует"){
                            console.log("Так ты уже с нами :). Ну заходи")
                            try{
                                let data;
                                data = await login(tgIdHook, userNameHook);
                                user.setUser(user);
                                user.setIsAuth(true);
                                navigate(MAIN_ROUTE);
                                console.log(user.isAuth);
                                console.log(data);
                            } catch (e) {
                            }
                        }
                        
                    }

                }

                

        
            
            
    return (
        <div className="main_block">
        <img src={loadingScreen} alt="playIcon" className="auth_load_screen" />
        <div className="letsPlay" onClick={click}>Играть</div>
        </div>
    );

});
//<Navigate to={REGISTRATION_ROUTE} replace={true} />

export default Auth;