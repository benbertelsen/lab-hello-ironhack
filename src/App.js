import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="first-section">
        <div className="App-header"> 
        <img src="/ironhack-logo.svg" alt="ironhack logo" />
        <img src="/menu-top.svg" alt="burger menu" />
      </div>
      <div>
        <h1 className="headertext">Say hello to ReactJS</h1>
        <p className="subheadertext">You will learn how to use the most popular front end library and become a super ninja coder 🥷</p>
      </div>
      <button className="awesome-btn">Awesome!</button>    
      </header>
    </div>
  );
}

export default App;
