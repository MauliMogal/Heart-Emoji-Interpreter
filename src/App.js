import React, { useState } from "react";
import "./styles.css";

const heartLib = {
  "❤️":
    "Red Heart - Used for expressions of love and romance. This is the most popular heart emoji",
  "🤎": "Brown Heart - Often used discuss topics related to racial identity",
  "🖤":
    "Black Heart - May be used to express morbidity, sorrow, or a form of dark humor, but despite the color remains most commonly used for love and affection.",
  "🤍":
    "White Heart - Used for love and affection. Also commonly used to discuss someone passing away.",
  "💗":
    "Growing Heart - A pink heart, inside a slightly larger pink heart, inside a larger-again pink heart. Intended to give the impression of a heart increasing in size.",
  "💓":
    "Beating Heart - A heart with vibration / movement lines above it, indicating it is a beating heart. Displayed in pink or red on most platforms, this emoji is intended to be used as a beating heart representing either life, or love.",
  "💕":
    "Two Hearts - Two pink love hearts. One larger than the other. Can be used to display that “love is in the air.",
  "💔":
    "Broken Heart - A love heart, broken in two. This emoji represents the aching one feels when they are missing the person they love.",
  "❤️‍🔥":
    "Heart on Fire - A heart shown on fire, for extreme or passionate forms of love or lust. Most representative of desire or lust, this emoji may also indicate a sense of burning a past love and moving on.",
  "❤️‍🩹":
    "Mending Heart - A heart shown with a bandage across one side; the opposite of a broken heart. May be used to indicate the process of healing, recovery, or to express sympathy for someone going through a difficult time.",
  "💘":
    "Heart with Arrow - A heart emoji with an arrow through the center, like the arrow that cupid shoots for love."
};

const hearts = Object.keys(heartLib);

export default function App() {
  const [meaning, setMeaning] = useState("Heart meaning will appear here..");

  function heartInputHandler(event) {
    let meaning = heartLib[event.target.value];
    if (meaning === undefined) {
      meaning = "This heart is not present in our database";
    }
    setMeaning(meaning);
  }

  function heartClickHandler(heart) {
    setMeaning(heartLib[heart]);
  }

  return (
    <div className="App">
      <h1>Heart Emoji Interpreter</h1>
      <h2>
        Enter heart or Choose any heart below to know meaning of that emoji
      </h2>
      <input
        onChange={heartInputHandler}
        placeholder="Put heart here to know the meaning"
      />
      <div id="output" className="output">
        {meaning}
      </div>

      <ul className="non-bullets">
        {hearts.map((heart) => {
          return (
            <li
              onClick={() => heartClickHandler(heart)}
              className="list-item"
              key={heart}
            >
              <a href="#output">{heart}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
