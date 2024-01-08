import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import Fakedoor from './components/pages/Fakedoor'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/fakedoor' element={<Fakedoor/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
