import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import  NavBar  from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailCountainer from './components/ItemDetailCountainer/ItemDetailCountainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>                                             
                        <Route path='/category/:category' element={<ItemListContainer/>}/>                                             
                        <Route path='/product/:id' element={<ItemDetailCountainer/>}/>                                             
                    </Routes>
            </BrowserRouter> 
        </>
    );
}

export default App;
