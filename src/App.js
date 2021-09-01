import React from 'react';
import Details from './Components/Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Payroll from './Components/Payroll';



const App = () => {
  return (
    <div>
      <Payroll/>
      <Header />
      <br />
      <br/>
     <Details/>
    </div>
  );
}


export default App;