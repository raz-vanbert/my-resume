import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import CustomThemeProvider from "./ThemeContext";
import Home from "./views/Home";
import Resume from "./views/Resume";

export default function App() {
  return (
    <CustomThemeProvider>
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Wrapper>
    </CustomThemeProvider>
  );
}
