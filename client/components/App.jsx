import React from 'react'

import Greetings from './Greetings'
import Spanish_Greetings from './Spanish_Greetings'

const App = () => (
  <div className='app-container'>
    <div className = 'greetings'>
      <div className = 'english'>
        <Greetings />
      </div>
      <div className = "spanish">
        <Spanish_Greetings />
      </div>
    </div>
  </div>
)

export default App
