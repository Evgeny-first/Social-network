import React, { Profiler } from 'react';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';


function App(props) {
  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      
      <div className='app-wrapper-content'>
       <Routes> 
        <Route path='/profile/*' element={<Profile posts={props.state.profilePage.posts}/>}/>
        <Route path='/dialogs/*'  element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>}/>
        <Route path='/news/*' element={<News/>}/>
        <Route path='/music/*' element={<Music/>}/>
        <Route path='/setting/*' element={<Setting/>}/>


        

        </Routes>
      </div>
      
    </div>
     </BrowserRouter> 
  );
  
}





export default App;
