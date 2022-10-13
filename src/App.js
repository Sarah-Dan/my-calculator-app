import React from 'react';
import Calculator from './components/Calculator';
import Footer from './components/Footer';



function App() {
  return (
    <section>
      <div className="main_page">
      <h1 className='greeting'>Welcome! feel free to try <span className='my__calculator'>my calculator</span></h1>
        <Calculator />
      </div>
      <div>
        <Footer />
      </div>
    </section>
    
  );
}

export default App;
