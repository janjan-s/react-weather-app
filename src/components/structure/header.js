import React, { Component } from 'react';
import styled from 'styled-components'


export default class Header extends Component {
  render() {
    return <Head>
        <Title>Weather app</Title>
        <p>Enter a location to check the weather for the next 5 days!</p>
    </Head>;
  }
}


// Styled components

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #ca1f7b;
  margin-top: 0;
  margin-bottom: 0;
`;

const Head = styled.header`
  background-color: #a5a3bd;
  margin-top: none;
  height: 10vh;
  p{
    margin: 0;
  }
`;