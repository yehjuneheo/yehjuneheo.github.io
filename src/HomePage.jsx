import React from 'react'

/* Componet */
import Header from './components/Header/Header';
import Main from './components/Main';
import Content from './components/Content/Content';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Home = () => {
  return (
    <div>

      <Header />

      <Content />

      <Main />

      <ScrollToTop />

    </div>
  )
}
export default Home;