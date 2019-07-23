// react libraries
import * as React from 'react';

// components
import Navbar from 'components/Navbar';
import Posts from 'components/Posts';
import Categories from 'components/Categories';
import Search from '../../components/Search';

const Home = () => {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <section>
        <div className="container">
          <div className="columns">
            <div className="col-3">
              <Categories/>
            </div>
            <div className="col-9">
              <div className="central-column mt-30">
                <Search/>
                <Posts/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;