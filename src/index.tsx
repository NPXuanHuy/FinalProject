import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from "./configStore"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import HomeTemplate from 'Templates/HomeTemplate/HomeTemplate';
import RoomDetail from 'Pages/RoomDetail/RoomDetail';
import RoomByCity from 'Pages/RoomByCity/RoomByCity';
import ProtectedRoute from 'Routes/ProtectedRoute';
import Login from 'Pages/Login/Login';
import Register from 'Pages/Register/Register';
import Info from 'Pages/Info/Info';
import InfoTickets from 'Pages/InfoTickets/InfoTickets';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <BrowserRouter>
    <Routes >
      <Route path='' element={<HomeTemplate/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='roomdetail/:id' element={<RoomDetail/>}/>
      <Route path='roombycity/:id' element={<RoomByCity/>}/>
      <Route path='personalinfo/:id' element={<ProtectedRoute>
        <Info/>
      </ProtectedRoute>}/>
      <Route path='ticketbyuser/:id' element={<ProtectedRoute>
        <InfoTickets/>
      </ProtectedRoute>}/>

      </Route>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>

      <Route path='*' element={<Navigate to={""}/>}/>
    </Routes>
    </BrowserRouter>
  </Provider>
);



