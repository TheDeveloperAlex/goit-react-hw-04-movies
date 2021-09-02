import Navigation from "./Navigation/Navigation";
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import FilmDetails from './pages/FilmDetails/FilmDetails';
import Container from './container/Container';

const App = () => {
    return (
        <>
         <Container>
            <Navigation />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies/:filmId" >
                    <FilmDetails />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
                
                <Route> 
                    <NotFound />
                </Route>
            </Switch>
            
         </Container>
       </>     
    );
}

export default App;