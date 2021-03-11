import React from 'react'
import { Link } from 'react-router-dom'

//props input
//line 11: props.path uses react router to pass properties indicated in Cards.jsx CardItem object
//line 12: props.label calls the value from label in the properties
function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}> 
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel Image" className="cards__item__img"/>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">
              {props.text}
            </h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
