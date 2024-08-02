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
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
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
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },
            {
                "isActive": true,
                "id": 3,
                "title": "Тестовое название 2",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },
            {
                "isActive": true,
                "id": 4,
                "title": "Тестовое название 2",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },
            {
                "isActive": true,
                "id": 5,
                "title": "Тестовое название 2",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },
            {
                "isActive": true,
                "id": 6,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 7,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 8,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 9,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 10,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 11,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 12,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 13,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 14,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },{
                "isActive": true,
                "id": 15,
                "title": "Тестовое название 3",
                "description": "Полное описание3",
                "shortDescription": "Краткое описание3",
                "link": "vk.com3",
                "price": "1980000000",
                "image": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                "updatedAt": "2024-07-28T03:23:30.910Z",
                "createdAt": "2024-07-28T03:23:30.910Z"
            },
        ]
        makeAutoObservable(this);
    }

    setTasks(tasks) {
        this._tasks = tasks;
    }


    get tasks() {
        return this._tasks;
    }
}