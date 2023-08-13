// import React, { useEffect, useState } from 'react';

import { Main, Heading } from './HomePage.styled';
// import { trendingWeekQuery } from '../../components/services/Api';
// import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchTrendingMovies = async () => {
  //     try {
  //       const response = await trendingWeekQuery();
  //       setMovies(response.data.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchTrendingMovies();
  // }, []);

  return (
    <Main>
      <Heading>blah blah blah</Heading>
      {/* <MoviesList movies={movies} /> */}
    </Main>
  );
};

export default HomePage;
