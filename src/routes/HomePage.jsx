import React from 'react';
import Header from '../Header'
import Articles from '../Articles'
import Tutorials from '../Tutorials';
import Server from '../Server';
import Bottom from '../Bottom';

function Homepage() {
  return (
  <body>

  <Header/>

  <Articles />
  <br />
  <Tutorials/>
  <br />
  <br />
  <Server />
  <br />
  <Bottom />
</body>
  )
}
export default Homepage