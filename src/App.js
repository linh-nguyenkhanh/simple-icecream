import { createContext, useState } from "react";
import Header from "./components/Header";
import IceCream from "./components/Icecream/IceCream";
import ReactSwitch from "react-switch";
import "./App.css";
import "./index.css";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <div className="App" id={theme}>
        <div>
          <div style={{ display: "inline-block" }}>
            <IceCream />
          </div>
          <div style={{ display: "inline-block" }}></div>
        </div>
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <div style={{ position: "fixed", bottom: "24px", right: "24px" }}></div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
