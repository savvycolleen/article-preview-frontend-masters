import drawers from "./assets/images/drawers.jpg"
import avatarMichelle from "./assets/images/avatar-michelle.jpg"
import share from "./assets/images/icon-share.svg"
import ShareLinks from "./ShareLinks"
import { useState } from "react"


export default function Card(){
  const [isClicked, setIsClicked] = useState(false)
  function toggle(){
    console.log('Click')
    setIsClicked(prevIsClicked => !prevIsClicked)
  }

  return(
    <main className="card">
      <img src={drawers} alt="green chest of drawers" className="card--img" />
      <div className="column">
        <div className="card--info container">
          <h1 className="card--info__intro">
            Shift the overall look and feel by adding these wonderful
            touches to furniture in your home
          </h1>
          <p className="card--info__description">
            Ever been in a room and felt like something was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.
          </p>
        </div>
        <div className="social container">
          <img src={avatarMichelle} alt="profile image" className="social--img" />
          <div className="social__text">
            <h2 className="social__text--name">Michelle Appleton</h2>
            <p className="social__text--date">28 Jun 2020</p>
          </div>
          <button onClick={toggle} className="share"><img src={share} alt="share icon arrow" /></button>
        </div>
        {isClicked && <ShareLinks />}
      </div>

    </main>
  )
}