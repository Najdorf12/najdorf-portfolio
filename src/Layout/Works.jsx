import CubeExperince from "../components/Models3D/Cube/CubeExperience";
const myWorks = [
  "Faustino Oro",
  "JFR",
  "Galeria Invisible",
  "Roman",
  "Horizon",
];
const Works = () => {
  return (
    <section
      id="works"
      className="w-full h-full bg-black overflow-hidden relative"
    >
      <section className="w-full h-full pt-12 lg:pt-20 lg:px-3">
        <article className="flex flex-col justify-center items-center lg:gap-3 relative z-50">
          <h6 className="font-title text-[10rem] text-orange lg:text-[18rem] lg:leading-[18rem]">
            Works
          </h6>
          <p className="font-text text-[10px] max-w-[300px] text-balance text-center text-zinc-500 lg:text-sm lg:mt-6 lg:max-w-[600px]">
            A showcase of my projects, blending innovative technology with
            user-focused design to create impactful digital solutions.
          </p>
        </article>
        <ul
          id="works1"
          className="w-full flex flex-col items-end mt-20 text-end lg:mt-24 relative"
        >
          {myWorks.map((work, i) => (
            <li
              key={i}
              className="font-title text-7xl w-full text-orange self-end border-b border-stone-600 py-2 pr-4 lg:text-9xl"
            >
              {work}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="works2"
        className="w-full text-balance h-full pt-24 pb-3 relative"
      >
        <article className="h-screen flex flex-col justify-between relative py-6 ">
          <p className="font-text relative text-[2rem] pl-3 text-orange font-semibold md:pl-6 md:text-6xl max-w-[600px] lg:text-7xl lg:max-w-[800px] lg:font-normal">
            SIMPLICITY IS THE NEW{" "}
            <span className="w-4 h-4 md:w-6 md:h-6 top-14 right-24 bg-zinc-700 rounded-full absolute md:right-40 md:top-[70px] lg:top-[86px] lg:right-70"></span>
            <span className="text-zinc-700">Sophistication</span>
          </p>
          <div className="absolute inset-0 z-50 w-full h-screen overflow-hidden lg:block ">
            <CubeExperince />
          </div>

          <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between px-3">
            <p className=" relative font-text text-gray2 text-[10px] text-balance pt-3 mt-2 max-w-[350px] lg:max-w-[500px]  ">
              <span className="absolute top-0 w-full h-[1px] bg-gray lg:-top-3"></span>
              I specialize in creating seamless digital experiences that blend
              aesthetic appeal with technical excellence. My approach combines
              modern development practices with a deep understanding of user
              behavior.
            </p>
            <p className=" relative font-text text-gray2 text-[10px] text-balance text-end pt-3 mt-2 max-w-[350px] md:text-start lg:max-w-[400px] lg:text-[12px] ">
              <span className="absolute top-0 w-full h-[1px] bg-gray lg:-top-3"></span>
              GREAT SOLUTIONS DON'T NEED TO BE COMPLEX -{" "}
              <span className="text-orange">JUST THOUGHTFULLY CRAFTED</span>
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Works;
