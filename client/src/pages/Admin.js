import React, { useState } from "react";
import CreateTask from "../components/modals/CreateTask/CreateTask";

const Admin = () => {
    const [toggle, setToggle] = useState(false);

    return (

        <div>
        <h2>Админ панель</h2>
        <div className="УРРААА" onClick={() => setToggle(!toggle)}>Добавить задание</div>
        {toggle ?  null : <CreateTask/>}
        
        </div>
    );
};

export default Admin;