import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

export default function Resume() {
  return (
    <>
      <Header />
      <Profile />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </>
  );
}
