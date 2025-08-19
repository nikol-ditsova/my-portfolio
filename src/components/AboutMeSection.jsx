import EducationTimeline from "./EducationTimeline";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="pt-10 header-bg">
      <div className="px-20 mt-6 text-white">
        <h2 className="text-5xl mainFont font-semibold tracking-wider mb-4">NIKOL DITSOVA</h2>
        <p className="mt-2 mb-2 text-lg tracking-wide secondaryFont text-white">Junior Full Stack Developer</p>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1">
          {/* <p className="text-2xl mainFont font-semibold">Nikol Ditsova (she/her)</p> */}
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br/>
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <br/>
            sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="w-96 h-96 rounded-full overflow-hidden mx-auto -mb-40 shadow-2xl relative z-10">
          {/* w-96 h-96 rounded-full overflow-hidden mx-auto mb-4 shadow-2xl */}
          <img src="/images/me.jpeg" alt="Portrait of me" className="w-full h-full object-cover" />
        </div>
      </div>
      </div>
    <div className="text-center w-full py-2 bg-slate-200 relative z-1">
        <EducationTimeline/>
    </div>
    </section>
  );
};

export default AboutMeSection;
