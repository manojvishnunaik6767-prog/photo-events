import React, { useState } from "react";
import "./App.css";

function App() {
  const [noStyle, setNoStyle] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`
    });
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Will you love me? ❤️</h1>

        <div className="buttons">
          <button
            className="yesBtn"
            onClick={() => setShowMessage(true)}
          >
            Yes 💖
          </button>

          <button
            className="noBtn"
            style={noStyle}
            onMouseEnter={moveNoButton}
            onClick={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
          >
            No 😜
          </button>
        </div>

        {showMessage && (
          <div className="message">
            I love you tumbaaaa <b>DEEPU!</b> ❤️❤️❤️
          </div>
        )}
      </div>
    </div>
  );
}

export default App;