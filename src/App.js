import React from 'react'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import './App.css'
import Images from './components/Images/Images'
import Videos  from './components/Videos/Videos'


function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Banner} ></Route>
        <Route exact path="/Images" component={Images} ></Route>
        <Route exact path="/Videos" component={Videos} ></Route>
      </Switch>
      
    </div>
  )
}

export default App
