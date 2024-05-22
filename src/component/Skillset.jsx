import React, { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
];

const Skillset = () => {
  const [progress, setProgress] = useState(
    skills.map(() => 0) // Initialize progress for each skill to 0
  );

  useEffect(() => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        incrementProgress(index, skill.level);
      }, index * 100); // Delay each skill's animation start
    });
  }, []);

  const incrementProgress = (index, level) => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        if (newProgress[index] < level) {
          newProgress[index] += 1;
        } else {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 30); // Increase the progress every 20ms
  };

  return (
    <div className="skillset">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <h3>{skill.name}</h3>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress[index]}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skillset;
