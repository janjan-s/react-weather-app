import React, { Component } from 'react';
import styled from 'styled-components'

export default class Footer extends Component {
  render() {
    return <Foot>
        <Copywrite><a href="http://jmoth.com/">Built by JMoth</a></Copywrite>
    </Foot>;
  }
}


// Styled components

const Foot = styled.footer`
  font-size: 2.5em;
  text-align: right;
  background-color: #a5a3bd;
  color: #ca1f7b;
  margin-top: auto;
  height: calc(5vh)
`;

const Copywrite = styled.small`
  margin-top: none;
  font-size: 15px;
  padding-right: 15px;
  a {
    color: #b07939;
    text-decoration: none;
  }
`;