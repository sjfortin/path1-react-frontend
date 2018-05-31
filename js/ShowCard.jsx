// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 1px solid #a2a2a2;
  border-radius: 6px;
  margin-bottom: 10px;
  padding-right: 10px;
  overflow: hidden;
`;

const ImageWrapper = styled.img`
  float: left;
  margin-right: 10px;
  width: 50%;
`;

const ShowCard = (props: { poster: string, title: string, year: string, description: string, imdbID: string }) => (
  <Wrapper>
    <ImageWrapper src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description} <span style={{ fontSize: '12px' }}>{props.imdbID}</span></p>
    </div>
  </Wrapper>
);

export default ShowCard;
