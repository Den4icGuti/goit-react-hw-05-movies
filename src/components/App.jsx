import { Container } from "./Container/Container";
import { Navigation } from "./Navigation/Navigation";
import { Home } from "./Pages/HomePage/HomePage";
import { MoviesPage } from './Pages/MoviesPage/MoviesPage';
import { Route,Routes } from "react-router-dom";
import { MovieDetails } from "./Pages/MovieDetailsPage/MovieDetailsPage";


export const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='movies/:movId/*' element={<MovieDetails/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Container>
  );
};
