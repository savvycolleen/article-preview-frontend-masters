import facebook from "./assets/images/icon-facebook.svg"
import twitter from "./assets/images/icon-twitter.svg"
import pinterest from "./assets/images/icon-pinterest.svg"
import share from "./assets/images/icon-share.svg"
import { useState } from "react"


export default function ShareLinks(){
  const [hideToggle, setHideToggle] = useState(false)
  function toggleOff(){
    console.log('Click')
    setHideToggle(prevHideToggle => !prevHideToggle)
  }
  return(
    <div className={`share--links row container ${hideToggle ? 'hidden' : ''}`}>
      <p>Share</p>
      <button className="share--links__icon"><img src={facebook} alt="facebook icon" /></button>
      <button className="share--links__icon"><img src={twitter} alt="twitter icon" /></button>
      <button className="share--links__icon"><img src={pinterest} alt="pinterest icon" /></button>
      <button onClick={toggleOff} className="share-active"><img src={share} className="share-icon-active" alt="share icon arrow" /></button>
    </div>
  )
}