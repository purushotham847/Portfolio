export default function Skills() {
  return (
    <>
      <div className="flex flex-col justify-center align-middle mt-20 lg:mt-32 xl:p-40 xl:pt-5 xl:pb-20">
        <div className="flex flex-col justify-center align-middle">
          <h1 className="font-bold text-center text-4xl text-black">SKILLS</h1>
          <p className="text-center mt-3 text-gray-500">
            These are the skills I have learned
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:m-10 md:m-20 lg:mt-10">

          <div className="w-auto self-center border-black border-2 m-6 pt-6 p-14 rounded-[30px] lg:p-40 lg:pt-14 lg:pb-14">
            <h2 className="text-center font-semibold text-[23px] mb-5 xl:text-[25px]">Languages</h2>
            <div className="grid grid-cols-1 gap-3 xl:pt-10 xl:pb-5">
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-3xl">
                <img className="w-7 h-7" src="java.png" />
                <p className="text-lg xl:text-xl">Java</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto overflow-hidden h-auto rounded-es-3xl">
                <img className="w-7 h-7" src="js.png" />
                <p className="text-lg xl:text-xl">JavaScript</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto overflow-hidden h-auto rounded-se-3xl">
                <img className="w-7 h-7" src="ts-logo-round-128.png" />
                <p className="text-lg xl:text-xl">TypeScript</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-3xl">
                <img className="w-7 h-7" src="html.png" />
                <p className="text-lg xl:text-xl">HTML</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <img className="w-7 h-7" src="css-3.png" />
                <p className="text-lg xl:text-xl">CSS</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <img className="w-7 h-7" src="database.png" />
                <p className="text-lg xl:text-xl">SQL</p>
              </div>
            </div>
          </div>

          <div className="w-auto self-center border-black border-2 m-6 pt-6 p-14 rounded-[30px] lg:pt-14 lg:pb-14 lg:p-40">
            <h2 className="text-center font-semibold text-[23px] mb-5 xl:text-[25px]">Backend</h2>
            <div className="grid grid-cols-1 gap-3 xl:pt-10 xl:pb-5">
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">Spring Boot</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">JDBC</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">Servlets / JSP</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">Spring Security</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">JUnit</p>
              </div>
            </div>
          </div>

          <div className="w-auto self-center border-black border-2 m-6 pt-6 p-14 rounded-[30px] lg:pt-14 lg:pb-14 lg:p-40">
            <h2 className="text-center font-semibold text-[23px] mb-5 xl:text-[25px]">Frontend</h2>
            <div className="grid grid-cols-1 gap-3 xl:pt-10 xl:pb-5">
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <img className="w-7 h-7 animate-spin" src="science.png" />
                <p className="text-lg xl:text-xl">React</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <img className="w-7 h-7" src="tailwind.png" />
                <p className="text-lg xl:text-xl">Tailwind CSS</p>
              </div>
            </div>
          </div>

          <div className="w-auto self-center border-black border-2 m-6 pt-6 p-14 rounded-[30px] lg:pt-14 lg:pb-14 lg:p-40">
            <h2 className="text-center font-semibold text-[23px] mb-5 xl:text-[25px]">Databases</h2>
            <div className="grid grid-cols-1 gap-3 xl:pt-10 xl:pb-5">
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">MySQL</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">PostgreSQL</p>
              </div>
            </div>
          </div>

          <div className="w-auto self-center border-black border-2 m-6 pt-6 p-14 rounded-[30px] lg:pt-14 lg:pb-14 lg:p-40">
            <h2 className="text-center font-semibold text-[23px] mb-5 xl:text-[25px]">AI / ML</h2>
            <div className="grid grid-cols-1 gap-3 xl:pt-10 xl:pb-5">
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">Generative AI</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">Transformers</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">Prompt Engineering</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">RAG (Retrieval-Augmented Generation)</p>
              </div>
            </div>
          </div>

          <div className="w-auto self-center border-black border-2 m-6 pt-6 p-14 rounded-[30px] lg:pt-14 lg:pb-14 lg:p-40">
            <h2 className="text-center font-semibold text-[23px] mb-5 xl:text-[25px]">Developer Tools</h2>
            <div className="grid grid-cols-1 gap-3 xl:pt-10 xl:pb-5">
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">Git</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">GitHub</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">Postman</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">VS Code</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">Streamlit</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">Figma</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-es-2xl">
                <p className="text-lg xl:text-xl">FAISS</p>
              </div>
              <div className="flex flex-row justify-center p-3 items-center gap-2 border-black border-2 w-auto h-auto rounded-se-2xl">
                <p className="text-lg xl:text-xl">Tavily</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
