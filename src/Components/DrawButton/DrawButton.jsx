import React, { Component } from 'react';
import Button from 'material-ui/Button';

import './DrawButton.css'

class DrawButton extends Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.props.drawCard();
  }
  
  render(props) {
    return(
    <div className="buttonContainer">
      <Button raised color="primary" className="btn" onClick={this.drawCard}>
        Draw Card
      </Button>
    </div>
    )
  }
}

export default DrawButton;
