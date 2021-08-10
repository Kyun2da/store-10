import React from 'react';
import Header from '@/Components/Header';
import { Route } from '@/core/Router';
import Main from '@/pages/Main';
import Detail from '@/pages/Detail';
import Banner from '@/Components/Banner';
import Footer from '@/Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Route path="/main" component={Main} />
      <Route path="/detail" component={Detail} />
      <Footer />
    </div>
  );
};

export default App;
