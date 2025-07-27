import '../styles/timelineStyle.css'

const EducationTimeline = () => {
  return (
    <section class="ps-timeline-sec ml-5">
        <div class="container">
            <ol class="ps-timeline">
                <li>
                    <div class="img-handler-top">
                        <img src="images//NAG_logo.png" alt=""/>
                    </div>
                    <div class="ps-bot">
                        Aprilov National High School <br /> Gabrovo, Bulgaria [2018 - 2023]
                    </div>
                    <span class="ps-sp-top"></span>
                </li>
                <li>
                    <div class="img-handler-bot">
                        <img src="/images/fontys_logo.png" alt=""/>
                    </div>
                    <div class="ps-top">
                        Fontys University of Applied Sciences <br /> Eindhoven, the Netherlands [2023 - now]
                    </div>
                    <span class="ps-sp-bot"></span>
                </li>
            </ol>
        </div>
    </section>
  );
};

export default EducationTimeline;