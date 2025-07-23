import imgAbout from "/images/05.png";
const About = () => {
  return (
    <>
      <section
        id="more"
        className=" w-full relative overflow-hidden z-10 px-5 py-3 lg:pt-20 lg:px-12 "
      >
        <article className="flex text-balance  flex-col gap-6 font-title text-zinc-400">
          <p className="text-7xl md:text-8xl lg:text-9xl max-w-[600px]">
            Turning ideas into{" "}
            <span className="text-zinc-500">interactive realities</span>
          </p>
          <p className="text-7xl self-end max-w-[200px] mt-6 md:text-8xl lg:max-w-[350px] xl:mr-20 ">
            Crafting immersive digital experiences
          </p>
        </article>
        <figure className="max-w-[160px] mt-6 lg:max-w-[220px] xl:max-w-[270px] lg:-mt-60 xl:-mt-70">
          <img
            src={imgAbout}
            alt="img-about"
            className="w-full object-contain"
          />
        </figure>
        <div className=" relative font-text text-zinc-400 text-[10px] text-balance pt-3 mt-2 max-w-[350px] lg:mt-0 lg:pt-4 lg:max-w-[500px] ">
          <span className="absolute top-0 w-full h-[1px] bg-zinc-100"></span>
          As a full-stack developer with a passion for UX/UI design, I create
          digital experiences that are intuitive, engaging, and impactful. My
          process blends clean code, user-centric design, and innovative
          technologies to deliver solutions that drive success.
        </div>
      </section>

      <section
        id="about"
        className="h-screen w-full flex justify-center items-center overflow-hidden"
      >
        <div className="h-[90%] px-5 text-balance w-[95%] rounded-2xl bg-zinc-800 lg:px-12 ">
          <article className="flex flex-col justify-center h-full font-text2">
            <h2 className="relative z-50 text-4xl max-w-[600px] lg:text-6xl text-[#9c7443] font-text">
              [ WHAT ABOUT ME ]
            </h2>
            <div className="relative z-50 text-stone-600 text-base font-text2 mt-5">
              CODE-DRIVEN | DESIGN-OBSESSED | USER-FOCUSED
            </div>
            <p className="relative z-50 text-base text-stone-500 font-text2 mt-16 max-w-[600px] ">
              I’m Agustin Morro, a full-stack developer based in Mendoza -
              Argentina, with a knack for turning complex ideas into elegant,
              functional applications. With expertise in technologies like
              React, Node.js, and Three.js, I build responsive, high-performance
              web solutions. My design philosophy prioritizes simplicity and
              user satisfaction, ensuring every project is both visually
              stunning and technically robust.
            </p>
          </article>
        </div>
      </section>

      <section
        id="about2"
        className="h-screen w-full flex justify-center items-center overflow-hidden"
      >
        <div className="h-[90%] px-5 text-balance w-[95%] rounded-2xl bg-orange lg:px-12">
          <article className="flex flex-col justify-center h-full font-text2">
            <h2 className="relative z-50 text-4xl lg:text-6xl text-white font-text">
              [ WHO I AM ]
            </h2>
            <div className="relative z-50 text-stone-300 text-base font-text2 mt-5">
              INTUITIVE APPROACH | FUTURE-FOCUSED STRATEGY | UNCOMPROMISING
              DISCIPLINE
            </div>
            <p className="relative z-50 text-base text-stone-700 max-w-[600px] font-text2 mt-16">
              I’m Agustin Morro, a full-stack developer based in Mendoza -
              Argentina, with a knack for turning complex ideas into elegant,
              functional applications. With expertise in technologies like
              React, Node.js, and Three.js, I build responsive, high-performance
              web solutions. My design philosophy prioritizes simplicity and
              user satisfaction, ensuring every project is both visually
              stunning and technically robust.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
