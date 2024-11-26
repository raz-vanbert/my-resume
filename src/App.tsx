import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import CustomThemeProvider from "./ThemeContext";
import Home from "./views/Home";
import Resume from "./views/Resume";
import Services from "./views/Services";
import GameDevelopment from "./views/services/GameDevelopment";
import TechnicalConsulting from "./views/services/TechnicalConsulting";
import WebDevelopment from "./views/services/WebDevelopment";

export default function App() {
  return (
    <CustomThemeProvider>
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/game-development"
            element={<GameDevelopment />}
          />
          <Route
            path="/services/technical-consulting"
            element={<TechnicalConsulting />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Wrapper>
    </CustomThemeProvider>
  );
}
