import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography } from 'material-ui';
import AddIcon from 'material-ui-icons/Add';

import styled from 'styled-components';

const Title = styled(Typography)`
  && {
    flex: 1;
    text-align: left;
    cursor: pointer;
  }
`;

class AppMenubar extends Component {
  constructor(props) {
    super(props);

    console.log("Props logged")
    console.log(props)
    // this.onClick = this.props.onClick.bind(this);
  }

  // Use an arrow function here:
 handleClick = () => {
   console.log('clickity');
 }

  render() {
    return(
      <AppBar color="default" position="static">
        <Toolbar>
          <Title type="title" color="inherit">
            Hebrew Quiz
          </Title>
          <Button fab color="primary" aria-label="add" mini="true" onClick={this.props.onClick}>
          {/* <Button fab color="primary" aria-label="add" mini="true"> */}
            <AddIcon />
          </Button>
          {/* <Button color="inherit" onClick={this.updateCard}>
            Draw Card
          </Button>
          <Button color="inherit">
            Daniel Holmlund
          </Button>
          <Button color="inherit">
            Log Out
          </Button>*/}
        </Toolbar>
      </AppBar>
    )
  }
};

export default AppMenubar;
