import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <div>
    <h1>Learn Te Reo With Whakataukī</h1>
    <Route path='/' component={Home} />
    <h2>E Hoa mā, kōwhiti tō whakataukī!</h2>
</div>
  )
}

export default App
