import './App.css';
import React, { Component} from "react";
import Login from './components/login';
import Signup from './components/signup';
import Hello from './components/Hello';
import BaseHome from './components/teacher-home';
import CardList from './components/lesson-card-list';
import CreateLesson from './components/add-lesson';
import CreateSubgroup from './components/add-subgroup';
import SubgroupList from './components/subgroup-list';
// import { Routes, Route, Link, Router } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className="site">
      <main  className='h-100'>
          <Routes>
              <Route exact path={"/login"} element={<Login />}/>
              <Route exact path={"/signup"} element={<Signup />}/>
              <Route exact path={"/hello"} element={<Hello />}/>
              <Route exact path={'/lesson'} element={<BaseHome children={CardList}/>}/>
              <Route exact path={'/lesson/create'} element={<CreateLesson />}/>
              <Route exact path={'/lesson/subgroups/create'} element={<CreateSubgroup />}/>
              <Route exact path={'/lesson/subgroups'} element={<SubgroupList />}/>
              {/* <Route path={"/"} render={() => <div>Home again</div>}/> */}
          </Routes>
      </main>
    </div>
  );
}

export default App;