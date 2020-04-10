import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.component'
import ShopPage from './pages/shop/shop.component'
const hatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
