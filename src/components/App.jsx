import { Container } from "./Container/Container";
import { Navigation } from "./Navigation/Navigation";
import { Suspense,lazy } from "react";
import { Route,Routes } from "react-router-dom";

const Home = lazy(() => import("./Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import('./Pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import("./Pages/MovieDetailsPage/MovieDetailsPage"))

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='movies/:movId/*' element={<MovieDetails/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path="*" element={<Home />} />
        </Routes>
        
      </Suspense>
      
    </Container>
  );
};
