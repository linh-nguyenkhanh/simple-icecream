import { createContext, useState } from "react";
import Header from "./components/Header";
import IceCream from "./components/Icecream/IceCream";
import ReactSwitch from "react-switch";
import "./App.css";
import "./index.css";
import ChatbotHelper from "./components/ChatbotHelper";

export const ThemeContext = createContext(null);

function App({ steps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <div className="App" id={theme}>
        <div className="switch">
          <label>{theme === "light" ? "☀️" : "🌒"}</label>
          <ReactSwitch
            onChange={toggleTheme}
            onColor="#2693e6"
            height={30}
            width={60}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            checked={theme === "dark"}
          />
        </div>
        <IceCream />
        <ChatbotHelper />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
