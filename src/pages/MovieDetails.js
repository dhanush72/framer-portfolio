import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieDB } from "../data/moviedb";

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [getMovies, setGetMovies] = useState(MovieDB);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = getMovies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
  }, [getMovies, url]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <SecondImage>
            <img src={movie.secondaryImg} alt="movie" />
          </SecondImage>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: #fff;
  padding: 5rem;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  position: relative;

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const AwardStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 1rem;
  }

  p {
    margin-top: -2rem;
  }

  .line {
    width: 50%;
    background: #23d997;
    height: 0.1rem;
    margin: 1rem 0;
  }
`;

const SecondImage = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetails;
