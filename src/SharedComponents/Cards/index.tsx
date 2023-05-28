import React from 'react';
import './index.css';
import infor from '../../assets/infor.png';
import Lily from '../../assets/Lily.png';
import sport from '../../assets/sport.png';
import sante from '../../assets/sante.jpg';
import food from '../../assets/food.jpg';
import design from '../../assets/design.jpg';
import health from '../../assets/heallth.png';
import art from '../../assets/art.png';
import { Link } from 'react-router-dom';


const Cards = () => {
  
  return (
    <>
      <h1> Some Skills To Choose </h1>
      <div className="top-row">
        <div className="card glass">
        <Link to="/quiz1" >

          <img src={infor} alt=""/>
          <div className="card-info">
            <h2>IT</h2>
            <p>Information Technologie</p>
         
          </div>
          </Link>
        </div>
        <div className="card glass">
        <Link to="/quiz2">
          <img src={Lily} alt=""/>
          <div className="card-info">
            <h2>Communication </h2>
            <p>The art of conveying</p>
           
          </div>
          </Link>
         </div>
        
        <div className="card glass">
        <Link to="/quiz3">
          <img src={sport} alt="Card 3"/>
          <div className="card-info">
            <h2>Sport & Games</h2>
            <p> The key to success!</p>
          </div>
          </Link>
        </div>
      </div>
      <div className="bottom-row">
        <div className="card glass">
        <Link to="/quiz4">
          <img src={design} alt="Card 4"/>
          <div className="card-info">
            <h2>Web Design</h2>
            <p>For a strong visual impact. </p>
          </div>
          </Link>
        </div>
        <div className="card glass">
        <Link to="/quiz5">
          <img src={health} alt="Card 5"/>
          <div className="card-info">
            <h2>HealthCare</h2>
            <p>For a better life.</p>
          </div>
          </Link>
        </div>
        <div className="card glass">
        <Link to="/quiz6">
          <img src={art} alt="Card 6"/>
          <div className="card-info">
            <h2>Art</h2>
            <p>Unleash your creativity</p>
          </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Cards;