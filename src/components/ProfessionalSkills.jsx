import '../styles/timelineStyle.css'

const ProfessionalSkills = () => {
  return (
    <section class="ps-timeline-sec ml-5">
        <div class="container">
            <ol class="ps-timeline">
                <li>
                    <div class="img-handler-top">
                        <img src="teamwork img" alt=""/>
                    </div>
                    <div class="ps-bot">
                        Teamwork
                    </div>
                    <span class="ps-sp-top"></span>
                </li>
                <li>
                    <div class="img-handler-bot">
                        <img src="problem solving img" alt=""/>
                    </div>
                    <div class="ps-top">
                        Adaptability
                    </div>
                    <span class="ps-sp-bot"></span>
                </li>
                <li>
                    <div class="img-handler-top">
                        <img src="teamwork img" alt=""/>
                    </div>
                    <div class="ps-bot">
                        Time management
                    </div>
                    <span class="ps-sp-top"></span>
                </li>
                <li>
                    <div class="img-handler-bot">
                        <img src="problem solving img" alt=""/>
                    </div>
                    <div class="ps-top">
                        Problem solving
                    </div>
                    <span class="ps-sp-bot"></span>
                </li>
            </ol>
        </div>
    </section>
  );
};

export default ProfessionalSkills;