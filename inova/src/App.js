import React from 'react';
import "./styles.css";
import Routes from './routes';
import Main from './pages/main/index';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
