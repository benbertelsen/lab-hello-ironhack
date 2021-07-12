import logo from './logo.svg';
import './App.css';

function Declarative(props) {

  return (
    <div className="feature-card">
    <img src={props.imgPath} alt="icon" />
    <p className="feature-header">{props.header}</p>
    <p className="feature-text">{props.text}</p>
    </div>
  );
}

export default Declarative;
