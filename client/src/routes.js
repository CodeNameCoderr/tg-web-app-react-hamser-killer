import Admin from "./pages/Admin";
import AuthPage from "./pages/Auth";
import Game from "./pages/Game";
import TaskList from "./pages/TaskList";
import TaskPage from "./pages/TaskPage";
import Main from "./pages/main"
import { ADMIN_ROUTE, GAME_ROUTE, REGISTRATION_ROUTE, TASK_ROUTE, TASK_LIST_ROUTE, MAIN_ROUTE } from "./utils/consts";

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
        path: TASK_LIST_ROUTE,
        Component: TaskList
    },
    {
        path: TASK_ROUTE + '/:id',
        Component: TaskPage
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]

export const publicRoutes = [
{
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    }
    
]