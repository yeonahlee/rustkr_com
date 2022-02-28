import React from 'react';
import Router from "./module/Router";
import Header from "./component/Header";

const App = (prop) => {
  return (
    <React.Fragment>
      <Header />
      <Router />
    </React.Fragment>
  )
}

export default App;