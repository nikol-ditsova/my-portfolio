import Header from "../components/header";
import Navbar from "../components/NavBar";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
// import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default HomePage;
