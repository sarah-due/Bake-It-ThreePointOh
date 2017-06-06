import React from 'react'

import Greetings from './Greetings'
import Spanish_Greetings from './Spanish_Greetings'
import Farewells from './Farewells'

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

    <div className = 'farewells'>
      <div className = 'english'>
        <Farewells />
      </div>
      <div className = "spanish">
      </div>
    </div>

  </div>
)

export default App
