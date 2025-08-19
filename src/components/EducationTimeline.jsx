import '../styles/timelineStyle.css'

const EducationTimeline = () => {
  return (
    <section className="ps-timeline-sec pb-8">
        <div className="container">
            <h2 className="text-3xl mainFont font-bold text-start pb-8 pt-6">Education</h2>
            <ol className="ps-timeline">
                <li>
                    <div className="img-handler-top">
                        <img src="/images/NAG_logo.png" alt=""/>
                    </div>
                    <div className="ps-bot">
                        Aprilov National High School <br /> Gabrovo, Bulgaria [2018 - 2023]
                    </div>
                    <span className="ps-sp-top"></span>
                </li>
                <li>
                    <div className="img-handler-bot">
                        <img src="/images/fontys_logo.png" alt=""/>
                    </div>
                    <div className="ps-top">
                        Fontys University of Applied Sciences <br /> Eindhoven, the Netherlands [2023 - now]
                    </div>
                    <span className="ps-sp-bot"></span>
                </li>
            </ol>
        </div>
    </section>
  );
};

export default EducationTimeline;