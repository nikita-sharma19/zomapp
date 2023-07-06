import React from "react";
import './App.css';
import Header from "./Header";
import Footer from './Footer';
const App = ()=>{
    return(
        <>
        <Header/>
        <div className='firstDiv'>
        <h1 >Nykaa React App</h1>
        <h2 className='secondDiv'>Nykaa of Nikita</h2>
        </div>
       <Footer/>
        </>
        
    )
}
export default App;
