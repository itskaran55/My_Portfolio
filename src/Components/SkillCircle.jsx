import React, { useState, useEffect } from "react";

const SkillCircle = ({ skillName, skillLevel, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        const element = document.getElementById(id);
        observer.observe(element);

        return () => observer.disconnect();
    }, [id]);

    // Animate the progress when the section becomes visible
    useEffect(() => {
        if (isVisible) {
            let interval = setInterval(() => {
                if (progress < skillLevel) {
                    setProgress((prev) => prev + 1);
                } else {
                    clearInterval(interval);
                }
            }, 15); // Control animation speed

            return () => clearInterval(interval);
        }
    }, [isVisible, progress, skillLevel]);

    return (
        <div
            id={id}
            className="relative flex items-center justify-center p-4 mb-8"
        >
            <div
                className="w-32 h-32 rounded-full  flex items-center justify-center"
            >
                <div
                    className="absolute inset-0 border-4 border-red-400 rounded-full"
                    style={{
                        background: `conic-gradient(
              #ADC6BF ${progress}%, transparent ${progress}%
            )`,
                    }}
                ></div>
            </div>
                <div className="absolute font-bold bottom-10">{skillName}</div>
            <div className="absolute font-bold md:text-4xl phs:text-3xl text-red-700">{progress}%</div>
        </div>
    );
};

export default SkillCircle;
