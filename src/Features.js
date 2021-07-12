import logo from './logo.svg';
import Declarative from './Declarative';
import './App.css';

function Features() {
  return (
    <div>
        <div className="second-section">
        <Declarative header="Declarative" text="React makes it painless to create interactive UIs" imgPath="/icon1.png" />
        <Declarative header="Components" text="Build encapsulated compontents that manage their state" imgPath="/icon2.png" />
        <Declarative header="Single-Way" text="A set of immutable values are passed to the components" imgPath="/icon3.png" />
        <Declarative header="JSX" text="Statically-typed designed to run on modern browsers" imgPath="/icon4.png" />
        </div>
    </div>
  );
}

export default Features;
