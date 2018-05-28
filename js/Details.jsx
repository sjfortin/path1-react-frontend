import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'

const Details = props => {
  const { title, year, description, poster, trailer } = props.show;
  return (
    <div className="details">
      <Header />
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img src={`/public/img/posters/${poster}`} alt={title} />
        <p>{description}</p>
      </section>
      <div>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
};

Details.propTypes = {
  show: PropTypes.shape([
    {
      title: PropTypes.string,
      description: PropTypes.string,
      year: PropTypes.string,
      imdbID: PropTypes.string,
      poster: PropTypes.string,
      trailer: PropTypes.string
    }
  ])
};
Details.defaultProps = {
  show: [
    {
      title: null,
      description: null,
      year: null,
      imdbID: null,
      poster: null,
      trailer: null
    }
  ]
};

export default Details;
