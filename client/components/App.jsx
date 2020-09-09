import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <div className="container">
    <h1 className="main-title">Learn Te Reo With Whakataukī</h1>
    <Route exact path='/' component={Home} />
</div>
  )
}

export default App
