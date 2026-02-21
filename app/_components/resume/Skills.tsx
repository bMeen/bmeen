import Tag from "../Tag";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind-CSS",
  "React",
  "React Native",
  "Nextjs",
  "Framer Motion",
  "Git",
];

function Skills() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-[500px_1fr] gap-2 lg:gap-0">
      <h2 className="text-lg lg:text-2xl">Skills & Tech Stacks</h2>

      <div className="flex flex-wrap gap-3 max-w-md lg:max-w-full">
        {skills.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
}

export default Skills;
