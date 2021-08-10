import React from 'react';
import Header from '@/components/Header';
import { Route } from '@/core/Router';
import Main from '@/pages/Main';
import Detail from '@/pages/Detail';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

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
