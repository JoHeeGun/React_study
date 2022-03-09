import './App.css';
import About from './components/About'


function SeeSharpGuide(){
  return (
    <div>
      SeeSharpGuide 입니다!!
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h2>테스트입니다!!</h2>
        <About/>
        <SeeSharpGuide/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
