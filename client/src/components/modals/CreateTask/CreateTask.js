import { observer } from "mobx-react-lite";
import React from "react";

const CreateTask = observer(({show}) => {
    return (
        <div>
            <form action="" method="get" className="add_task_form">
              <div className="add_task_form_field_block">
                <label htmlFor="title">Введите название задания: </label>
                <input type="text" name="taskTitle" id="taskTitle" required />
              </div>
              <div className="add_task_form_field_block-example">
                <label htmlFor="decription">Введите описание что должно содержать задание: </label>
                <input type="text" name="decription" id="emdecriptionail" required />
              </div>
              <div className="add_task_form_field_block-example">
                <label htmlFor="shortDescription">Введите то же содержание только максимально кратко: </label>
                <input type="text" name="shortDescription" id="shortDescription" required />
              </div>
              <div className="add_task_form_field_block-example">
                <label htmlFor="link">Введите ссылку на каоторую пользовательн долже будет перейти: </label>
                <input type="text" name="link" id="link" required />
              </div>
              <div className="add_task_form_field_block-example">
                <label htmlFor="link">Введите сумму коинов которую пользователь получит в случае выполнения: </label>
                <input type="text" name="link" id="link" required />
              </div>
              <div className="add_task_form_field_block-example">
                <label htmlFor="image">Введите иконку для задания: </label>
                <input type="file" name="image" id="image" required />
              </div>
              <div className="add_task_form_field_block-example">
                <label htmlFor="isActive">Задание будет сразу активно: </label>
                <input type="checkbox" name="isActive" id="isActive" required />
              </div>
              <div className="form-add_task_form_button_block">
                <input type="submit" value="Создать!" />
              </div>
            </form>

        </div>
        
    );
});

export default CreateTask;