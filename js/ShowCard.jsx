// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled((Link: any))`
  width: 32%;
  border: 1px solid #a2a2a2;
  border-radius: 6px;
  margin-bottom: 10px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const ImageWrapper = styled.img`
  float: left;
  margin-right: 10px;
  width: 50%;
`;

class ShowCard extends Component {
  shouldComponentUpdate() {
    return false;
  }
  props: Show;
  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <ImageWrapper src={`/public/img/posters/${this.props.poster}`} alt={`${this.props.title} Show Poster`} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description} <span style={{ fontSize: '12px' }}>{this.props.imdbID}</span></p>
        </div>
      </Wrapper>
    );
  }
}

// const ShowCard = (props: Show) => (
//   <Wrapper to={`/details/${props.imdbID}`}>
//     <ImageWrapper src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
//     <div>
//       <h3>{props.title}</h3>
//       <h4>({props.year})</h4>
//       <p>{props.description} <span style={{ fontSize: '12px' }}>{props.imdbID}</span></p>
//     </div>
//   </Wrapper>
// );

export default ShowCard;
