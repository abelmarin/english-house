import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Courses } from './components/Courses';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import { ExtraCurricular } from './components/ExtraCurricular';
import Contact from './components/Contact';
import Admin from './components/Admin';
import { Header } from './components/Header';
import Footer from './components/Footer';

import { GlobalProvider } from './context/GlobalState';

function App() {
  
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <div className="wrapper">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/courses" component={Courses} exact />
            <Route path="/gallery" component={Gallery} exact />
            <Route path="/aboutus" component={AboutUs} exact />
            <Route path="/extracurricular" component={ExtraCurricular} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/admin" component={Admin} exact />
          </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
