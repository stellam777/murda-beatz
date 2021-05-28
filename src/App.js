import './App.scss';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Releases from './components/Releases';
import Tours from './components/Tours';
import Store from './components/Store';
import Photos from './components/Photos';
import Videos from './components/Videos';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App justify-content-center'>
      <Nav />
      <Hero />
      <Releases />
      <Tours />
      <Videos />
      <Store />
      <Photos />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
