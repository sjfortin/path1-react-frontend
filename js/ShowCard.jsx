import React from 'react';
import PropTypes from 'prop-types';
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

const ShowCard = props => (
  <Wrapper>
    <ImageWrapper src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ShowCard;
