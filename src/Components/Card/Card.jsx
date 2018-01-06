import React, { Component } from 'react';
import './Card.css'

const Card = (props) => (

<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div className="flipper">
		<div className="front">
      <div className="question">
        <div className="han">{props.hebrew}</div>
  		</div>
    </div>
		<div className="back">
      <div className="answer">
        <div className="han">{props.hebrew}</div>
        <div className="eng">{props.english}</div>
        <div className="pin">{props.comment}</div>
  		</div>
    </div>
	</div>
</div>
)

export default Card
