import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css"


const Header = () => {
    const {user} = useTelegram();
    console.log(user);
    return ( 

        <div className={'header'}>
            <span className={"username"}>
                {user}
            </span>
        </div>
     );
};

export default Header;