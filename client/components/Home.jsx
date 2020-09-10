
import React from 'react'
// import Whakataukii from './images/kei_oou_ringaringa'

class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <h2>E Hoa mā, kōwhiti tō whakataukī!</h2>
        <p className='instruction'>Hello friends! listen to each proverb and click on a proverb to start learning!</p>
        <div className='display-cube-tahi'>
        <img className="img-wh" src='./images/kei_oou_ringaringa.png' alt="te_ao_in_your_hands"/>
        </div> 
{/* 
        <div className='display-cube-rua'>
        <img className="img-wh" src='./images/paahokahoka.png' alt="te_ao_in_your_hands"/>
        </div>  */}
        
      </div>
    )
  }
}

export default Home