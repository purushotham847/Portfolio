export default function Aboutsection() {
  return (
    <section className="h-auto w-full mt-40 text-justify">
      <h1 className="text-center mb-8 text-4xl font-bold text-black">
        ABOUT ME
      </h1>

      <div className="flex flex-col-reverse xl:flex-row lg:flex-row md:flex-row items-center justify-center xl:gap-10 lg:gap-10 md:gap-6 gap-8 px-4">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-[55%]">
          <div>
            <p className="first-letter:text-2xl p-4 sm:text-lg xl:text-2xl text-md">
         
              Hello there!👋 
              I am Purushotham, a passionate <b>Software Developer</b> from
              Bengaluru, India. I specialize in building <b>AI-powered</b> and
              <b> full-stack web applications</b> that blend creativity, functionality,
              and performance.
            </p>

            <p className="p-4 text-md sm:text-lg xl:text-2xl">
              I hold a <b>Bachelor’s degree in Computer Science Engineering</b> and have
              hands-on experience developing scalable systems using
              <b> Java, Spring Boot, React, PostgreSQL, and Generative AI</b>.
              During my time at <b>DRDO</b>, I built a secure
              <b> Translation Management System (TMS)</b> using Django and contributed to
              AI dataset creation for low-resource languages.
            </p>

            <p className="p-4 text-md sm:text-lg xl:text-2xl">
              My interests span across <b>Generative AI, LangChain, Retrieval-Augmented
              Generation (RAG)</b>, and intelligent web solutions. I’m driven by curiosity
              and the goal of merging <b>AI innovation</b> with <b>clean, user-centric design</b>.
            </p>

            <p className="p-4 text-md sm:text-lg xl:text-2xl">
              Let’s collaborate and build something impactful together! 🚀  
              Feel free to reach out to discuss ideas, projects, or opportunities.
            </p>
          </div>

          <div className="flex justify-center gap-3 md:gap-5 mt-4">
            <a
  href="mailto:purushothamgowda847@gmail.com?subject=Hello%20Purushotham&body=Hi%20Purushotham%2C%0A%0A"
  target="_blank"
  rel="noreferrer"
>
              <img
                className="w-9 h-9 md:w-11 md:h-11 hover:animate-bounce"
                src="gmail.png"
                alt="Gmail"
              />  
            </a>
            <a target="_blank" href="https://x.com/Purushotham_007" rel="noreferrer">
              <img
                className="w-8 h-8 md:w-10 md:h-10 hover:animate-bounce"
                src="twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/purushotham-bm-63543822a/" rel="noreferrer"
            >
              <img
                id="skillsection"
                className="w-8 h-8 md:w-10 md:h-10 hover:animate-bounce"
                src="linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center xl:justify-end lg:justify-end md:justify-end w-full md:w-1/2 lg:w-1/2 xl:w-[45%]">
          <img
            src="myphoto.jpg"
            alt="Purushotham"
            className="sm:h-80 sm:w-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]
              rounded-tl-[150px] rounded-bl-[150px] md:rounded-tl-[200px] md:rounded-bl-[200px]
              xl:rounded-tl-[250px] xl:rounded-bl-[250px]"
          />
        </div>
      </div>
    </section>
  );
}
