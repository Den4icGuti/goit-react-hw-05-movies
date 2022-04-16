import { Container } from "./Container/Container";
import { Navigation } from "./Navigation/Navigation";
import { Home } from "./Pages/HomePage/HomePage";
import { Route } from "react-router-dom";
export const App = () => {
  return (
    <Container>
      <Navigation />
      <Route path='/' exact>
        <Home/>
      </Route>
   </Container>
  );
};
