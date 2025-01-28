// Skills.js
import React from "react";
import SkillCircle from "./SkillCircle";

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 flex justify-center items-center flex-col text-center">
            <div className="titles">
                <div className="mainTitle">
                    <h2 className="md:text-5xl md:font-bold md:text-white phs:text-3xl phs:text-white phs:font-bold my-5">
                        My Projects
                    </h2>
                </div>
                <div className="subTitle">
                    <h3 className="md:text-[1.2rem] text-red-700 phs:text-[1.1rem] phs:my-2 phs:font-bold my-5">
                        "From Learning to Mastery"
                    </h3>
                </div>
            </div>
            <div className="flex items-center w-full phs:flex-col">
                <div className="firstSkillSections flex justify-evenly items-center w-full">
                    <div className="firstSkill">
                        <SkillCircle skillName="HTML/CSS" skillLevel={90} id="skill-1" />
                    </div>
                    <div className="secondSkill">
                        <SkillCircle skillName="React JS" skillLevel={85} id="skill-2" />
                    </div>
                </div>
                <div className="secondSkillSection flex justify-evenly items-center w-full">
                <div className="thirdSkill">
                    <SkillCircle skillName="Next JS" skillLevel={80} id="skill-3" />
                </div>
                <div className="fourthSkill">
                    <SkillCircle skillName="Node.js" skillLevel={70} id="skill-4" />
                </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
