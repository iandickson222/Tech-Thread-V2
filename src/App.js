import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Research from './components/Research'
import Experience from './components/Experience'
import Publications from './components/Publications'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <About/>
        <div className='content'>
          <Education/>
          <Research/>
          <Experience/>
          <Publications/>
        </div>  
      </div> 
    </div>
  );
}

export default App;
