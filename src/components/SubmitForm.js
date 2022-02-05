import React, { Component } from 'react';
import styled from 'styled-components'

export default class SubmitForm extends Component {
  render() {
    return <LocationChecker>
        <label>Enter your location here</label>
        <input></input>
    </LocationChecker>;
  }
}

const LocationChecker = styled.form`
    text-align: center;
    margin: auto;
    height: 5vh;
    margin-top: 50px;
`;