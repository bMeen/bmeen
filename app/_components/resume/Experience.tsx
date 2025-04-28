function Experience() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-[500px_1fr] gap-2 mb-10 lg:mb-20">
      <h2 className="text-lg lg:text-2xl">Work Experience</h2>
      <div className="space-y-6 lg:space-y-10 ">
        <div className="grid lg:grid-cols-[200px_1fr] lg:gap-6">
          <p className="">Feb 2025 - Present</p>
          <div className=" lg:space-y-1">
            <h3 className="text-base lg:text-lg">
              SparkXplorer - Frontend Intern
            </h3>
            <p className="max-w-md lg:max-w-full">
              SparkXplorer is a tutoring program helping K–12 students achieve
              A-honor status. As a Frontend Intern, I worked on building
              responsive, user-friendly interfaces using Nuxt.js. Improved UI
              components, and collaborated closely with the design and backend
              teams to enhance the platform’s overall user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
