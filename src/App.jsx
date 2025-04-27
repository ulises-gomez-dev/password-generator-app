import { useState } from "react";
import Checkbox from "./Checkbox.jsx";
import Button from "./Button.jsx";
import "./App.css";
import CopyIcon from "./assets/images/icon-copy.svg?react";
import ArrowRightIcon from "./assets/images/icon-arrow-right.svg";

function App() {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [length, setLength] = useState(0);
  const [click, setClick] = useState(false);

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);

    setClick(true);

    setTimeout(() => {
      setClick(false);
    }, 2000);
  };

  const handleSliderChange = (e) => {
    setLength(e.target.value);
  };

  return (
    <div className="password-display">
      <header className="title">
        <h1>Password Generator</h1>
      </header>
      <div className="settings-container">
        <div className="password-container">
          <p>{password}</p>
          <div className="copy-container">
            {click && <p>COPIED</p>}
            <button onClick={handleCopyPassword}>
              <CopyIcon className="copy-icon" />
            </button>
          </div>
        </div>

        <form className="options-container">
          <div className="options-list">
            <div className="character-length-container">
              <div className="group">
                <p>Character Length</p>
                <p>{length}</p>
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min={0}
                  max={20}
                  value={length}
                  className="slider"
                  onChange={handleSliderChange}
                />
              </div>
            </div>

            <div className="checkbox-options-container">
              <Checkbox label={"Include Uppercase Letters"} />
              <Checkbox label={"Include Lowercase Letters"} />
              <Checkbox label={"Include Numbers"} />
              <Checkbox label={"Include Symbols"} />
            </div>

            <div className="strength-container">
              <div className="strength">
                <p>STRENGTH</p>
                <div className="strength-bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
              <Button label={"GENERATE"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
