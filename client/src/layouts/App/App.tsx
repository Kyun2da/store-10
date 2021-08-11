import React from 'react';
import Header from '@/components/Header';
import { Route, Switch } from '@/core/Router';
import Main from '@/pages/Main';
import Detail from '@/pages/Detail';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import NavLinks from '@/pages/NavLinks';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/navlink" component={NavLinks} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
