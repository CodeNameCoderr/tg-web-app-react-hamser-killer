import {makeAutoObservable} from "mobx";

export default class TaskStore {
    constructor() {
        this._tasks = [
            {
                "isActive": true,
                "id": 1,
                "title": "Тестовое название 1",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "0eee0bc7-048f-4beb-bc98-48d29a8026f2.jpeg",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },
            {
                "isActive": true,
                "id": 2,
                "title": "Тестовое название 2",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "0eee0bc7-048f-4beb-bc98-48d29a8026f2.jpeg",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },
            {
                "isActive": true,
                "id": 3,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "0eee0bc7-048f-4beb-bc98-48d29a8026f2.jpeg",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            }
        ]
        makeAutoObservable(this);
    }

    setTasks(tasks) {
        this._tasks = tasks;
    }


    get Tasks() {
        return this._tasks;
    }
}