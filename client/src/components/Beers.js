import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';


class Beers extends Component {
  state = { 
    loaded: false, 
    token: '',
    beers:'',
  };

  componentDidMount() {
      axios.get(`/api/api/beers`)
        .then( res => res.json() )
        .then( beers => this.setState({ beers }) )
        const { data: token, entries } = this.props;
  };
  

  render() {

    return (
      <Card.Group>
     {this.state.beers.map( beers => 
          <Card key={beers.id}>
          <Card.Content>
            <Card.Header>{beers.name}</Card.Header>
            <Card.Meta>{beers.description}</Card.Meta>
          </Card.Content>
          </Card>
    )
  }
      </Card.Group>


    );
  }
}

export default Beers;
