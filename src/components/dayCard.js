import React, { Component } from 'react';
import styled from 'styled-components'


export default class DayCard extends Component {
  render() {
    return <Card>
        <p>Day</p>
        <p>Tempature</p>
        <p>Rain/sun</p>
        <p>Wind</p>
    </Card>;
  }
}


const Card = styled.div`
    flex: 1 1 100%;
    /* margin: auto; */

    @media (max-width: 768px) {
        flex: 1 1 50%;
  }

  @media (max-width: 1200px) {
        flex: 1 1 25%;
  }
`;