import React, { Component, useEffect } from 'react';
import styled from 'styled-components'

import DayCard from '../dayCard';



// fetch("api.openweathermap.org/data/2.5/forecast?lat=51.5072&lon=0.1276&appid=b524d11ea0aca66a3e4843b62b87e32a")

export default class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // Ping London, We need to add the ability to submit a city name
    fetch("api.openweathermap.org/data/2.5/forecast?lat=51.5072&lon=0.1276&appid=b524d11ea0aca66a3e4843b62b87e32a")
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log(this.state.items)
  }


  render() {
    return <MainBody>
      <DayCard></DayCard>
      <DayCard></DayCard>
      <DayCard></DayCard>
      <DayCard></DayCard>
      <DayCard></DayCard>
    </MainBody>;
  }
}

const MainBody = styled.body`
  /* margin-bottom: 60px; */
  height: calc(80vh - 50px);
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;