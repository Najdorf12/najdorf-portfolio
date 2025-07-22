import imgAbout from "/images/05.png";
const About = () => {
  return (
    <>
      <section
        id="more"
        className=" w-full relative overflow-hidden z-10 px-5 lg:pt-20"
      >
        <article className="flex text-balance  flex-col gap-6 font-title text-zinc-400">
          <p className="text-7xl lg:text-9xl max-w-[600px]">
            Turning ideas into{" "}
            <span className="text-zinc-500">interactive realities</span>
          </p>
          <p className="text-7xl self-end max-w-[200px] mt-6 lg:text-8xl lg:max-w-[400px] lg:mt-12 ">
            Crafting immersive digital experiences
          </p>
        </article>
        <figure className="max-w-[160px] mt-16 lg:max-w-[300px]">
          <img
            src={imgAbout}
            alt="img-about"
            className="w-full object-contain"
          />
        </figure>
        <div className=" relative font-text text-zinc-400 text-[10px] text-balance pt-3 mt-2 max-w-[350px] lg:max-w-[500px] ">
          <span className="absolute top-0 w-full h-[1px] bg-zinc-200"></span>I
          believe in a holistic and user-centric UX/UI design approach. My
          proccess is meticulously crafted to deliver exceptional digital
          experiences that resonate with your audience and drive success.
        </div>

     
      </section>

      <section
        id="about"
        className="h-screen w-full flex justify-center items-center overflow-hidden"
      >
        <div className="h-[85%] px-5 text-balance w-[95%] rounded-2xl bg-zinc-800 ">
          <article className="flex flex-col justify-center h-full font-text2">
            <h2 className="relative z-50 text-4xl lg:text-6xl text-[#9c7443] font-text">
              [ WHAT ABOUT ME ]
            </h2>
            <div className="relative z-50 text-stone-600 text-base font-text2 mt-5">
              INTUITIVE APPROACH | FUTURE-FOCUSED STRATEGY | UNCOMPROMISING
              DISCIPLINE
            </div>
            <p className="relative z-50 text-base text-stone-500 font-text2 mt-16">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda temporibus quod voluptas, at natus, quam quae nihil,
              magnam enim ducimus odit vero suscipit eaque illum voluptates
              Officiis placeat necessitatibus quidem
            </p>
          </article>
        </div>
      </section>

      <section
        id="about2"
        className="h-screen w-full flex justify-center items-center overflow-hidden"
      >
        <div className="h-[85%] px-5 text-balance w-[95%] rounded-2xl bg-orange ">
          <article className="flex flex-col justify-center h-full font-text2">
            <h2 className="relative z-50 text-4xl lg:text-6xl text-white font-text">
              [ WHO I AM ]
            </h2>
            <div className="relative z-50 text-stone-400 text-base font-text2 mt-5">
              INTUITIVE APPROACH | FUTURE-FOCUSED STRATEGY | UNCOMPROMISING
              DISCIPLINE
            </div>
            <p className="relative z-50 text-base text-stone-700 font-text2 mt-16">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda temporibus quod voluptas, at natus, quam quae nihil,
              magnam enim ducimus odit vero suscipit eaque illum voluptates
              Officiis placeat necessitatibus quidem
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
