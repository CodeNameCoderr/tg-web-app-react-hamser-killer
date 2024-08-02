import { useEffect, useContext, useState } from 'react';
import { useTelegram } from './hooks/useTelegram';
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import {Context} from "./index";
import { observer } from 'mobx-react-lite';
import { check } from "./http/userApi"


const App = observer(() => {
  const {tg} = useTelegram();
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(false);


  useEffect( () => {
    tg.ready();
    check().then(data => {
    //if(data.ok){ // добавил
      user.setUser(true)
      user.setIsAuth(true)
    //}
  }).finally(() => setLoading(false))
    
  }, [tg])

  if(loading){
    return <button className='loadingSpinner'></button>
  }


  return (
    <BrowserRouter className="App">
      <div className='container'>
        <AppRouter/>
        {user.isAuth ? 
        <NavBar />
        :
        <></>
        }
        </div>
    </BrowserRouter>
  );
});

export default App;
