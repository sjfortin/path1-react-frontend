import React from 'react';
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

export default Details;
