import { Container } from "./Container/Container";
import { Navigation } from "./Navigation/Navigation";
import { Home } from "./Pages/HomePage/HomePage";
import { Route,Switch } from "react-router-dom";
import { MovieDetails } from "./Pages/MovieDetailsPage/MovieDetailsPage";
export const App = () => {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/movies/:movId'>
        <MovieDetails/>
      </Route>
      </Switch>
    </Container>
  );
};
