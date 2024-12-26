import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full min-h-screen p-4 flex items-center py-16 bg-gray-200"
    >
      <div className="max-w-[1240px] m-auto bg-white bg-opacity-80 rounded-lg p-6 shadow-lg">
        <h3 className="uppercase tracking-widest text-2xl font-semibold text-center mb-8 text-gray-800">About Me</h3>
        <div className="space-y-4 text-center px-4 sm:px-6 md:px-8 lg:px-12">
          <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
            I am passionate software engineer and aspiring data scientist
            with a strong foundation in data science, machine learning, and mathematics. I specialize
            in building scalable and maintainable applications using modern technologies, including React,
            Node.js, and AWS. My academic journey includes a Bachelor of Science degree
            with a major in Mathematics and an upcoming Postgraduate Diploma in Data Science,
            highlighting my deep commitment to data-driven solutions and analytical thinking.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
            Beyond formal education, I'm dedicated to continual learning. In my free time,
            I pursue personal projects and online courses to stay current with the latest developments
            in both software development and data science. My journey is grounded in a drive to make a meaningful impact,
            build my skills, and create solutions that bring value to users and organizations alike.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="/resume/myResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 text-gray-100 bg-gray-500 hover:bg-gray-600 rounded-lg font-semibold transition duration-300"
            >
              Get My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;