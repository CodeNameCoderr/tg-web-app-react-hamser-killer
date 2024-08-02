import {$authHost, $host} from "./index"
import { jwtDecode } from "jwt-decode";

export const registration = async (telegramID, username) => {
    const {data} = await $host.post('api/user/registration', {telegramID, username, role: 'ADMIN'})
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (telegramID, username) => {
    const {data} = await $host.post('api/user/login', {telegramID, username})
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    try{
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    console.log("БЛЯЯЯЯТЬ")
    return jwtDecode(data.token)
    } catch(e){
        console.log(e)
    }
}