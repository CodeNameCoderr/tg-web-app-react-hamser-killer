import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';


function App() {
  const {tg} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [tg])


  return (
    <BrowserRouter className="App">
      <NavBar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
