import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Game from "./pages/Game";
import TaskPage from "./pages/TaskPage";
import { ADMIN_ROUTE, GAME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TASK_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: GAME_ROUTE,
        Component: Game
    },
    {
        path: TASK_ROUTE,
        Component: TaskPage
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]