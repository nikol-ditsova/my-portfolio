import Header from "../components/header";
import Navbar from "../components/NavBar";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
