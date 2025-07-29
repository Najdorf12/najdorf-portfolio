import imgAbout from "/images/05.png";
const About = () => {
  return (
    <>
      <section
        id="more"
        className=" w-full relative overflow-hidden z-10 px-5 py-3 lg:pt-20 lg:px-12 xl:px-20 xl:py-9 2xl:py-12 "
      >
        <article className="flex text-balance  flex-col gap-6 font-title text-zinc-400">
          <p className="text-7xl md:text-8xl lg:text-9xl max-w-[600px] 2xl:text-[9rem] 2xl:max-w-[800px]">
            Turning ideas into{" "}
            <span className="text-zinc-500">interactive realities</span>
          </p>
          <p className="text-7xl self-end max-w-[200px] mt-6 md:text-8xl lg:max-w-[350px] xl:mr-20 2xl:text-9xl xl:mt-12">
            Crafting immersive digital experiences
          </p>
        </article>
        <figure className="max-w-[160px] mt-6 lg:max-w-[220px] xl:max-w-[270px] lg:-mt-60 xl:-mt-86 2xl:max-w-[300px] 2xl:-mt-96">
          <img
            id="more-img"
            src={imgAbout}
            alt="img-about"
            className="w-full object-contain"
          />
        </figure>
        <div className=" relative font-text text-zinc-400 text-[10px] text-balance pt-3 mt-2 max-w-[350px] lg:mt-0 lg:pt-4 lg:max-w-[500px] 2xl:text-[12px] 2xl:max-w-[600px] ">
          <span className="absolute top-0 w-full h-[1px] bg-zinc-100"></span>I
          design digital solutions that are intuitive, engaging, and impactful.
          My process blends clean code, user-centric design, and innovative
          technologies to deliver solutions that drive success
        </div>
      </section>

      <section
        id="about"
        className="h-screen w-full flex justify-center items-center overflow-hidden"
      >
        <div className="h-[90%] px-5 text-balance w-[95%] rounded-2xl bg-zinc-800 lg:px-20 ">
          <article className="flex flex-col justify-center h-full font-text2">
            <h2 className="relative z-50 text-4xl max-w-[600px] lg:text-6xl text-[#9c7443] font-text 2xl:text-7xl 2xl:max-w-[800px]">
              [ WHAT ABOUT ME ]
            </h2>
            <div className="relative z-50 text-stone-600 text-base font-text2 mt-5 2xl:text-lg">
              CODE-DRIVEN | INNOVATIVE SOLUTIONS | USER-CENTRIC DESIGN
            </div>
            <p className="relative z-50 text-base text-stone-500 font-text2 mt-16 max-w-[600px] 2xl:text-lg">
              I’m Agustin Morro, a full-stack developer based in Mendoza -
              Argentina, with a passion for transforming bold ideas into
              seamless digital experiences. I build responsive, high-performance
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
        <div className="h-[90%] px-5 text-balance w-[95%] rounded-2xl bg-orange lg:px-20">
          <article className="flex flex-col justify-center h-full font-text2">
            <h2 className="relative z-50 text-4xl lg:text-6xl text-zinc-100 font-text 2xl:text-7xl xl:max-w-[700px] 2xl:max-w-[800px]">
              [ WHAT I BRING ]
            </h2>
            <div className="relative z-50 text-zinc-300 text-base font-text2 mt-5 2xl:text-lg">
              INTUITIVE APPROACH | FUTURE-FOCUSED STRATEGY | UNCOMPROMISING
              DISCIPLINE
            </div>
            <p className="relative z-50 text-base text-zinc-700 max-w-[600px] font-text2 mt-16 2xl:text-lg">
              I wield cutting-edge technologies like React and Three.js to build
              immersive web applications. My approach is rooted in solving
              real-world problems with innovative solutions, always aiming to
              create digital products that are intuitive, impactful, and
              future-ready.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
/* Home Section

Navigation: Keep the minimal nav with links to "Projects," "About," and "Contact."
Title: Agustin Morro
Subtitle: Full-Stack Developer & UX/UI Enthusiast

Note: Adding "UX/UI Enthusiast" to the subtitle emphasizes your design passion while keeping it concise and aligned with your brand.


I believe in digital minimalism—stripping away complexity to reveal solutions of startling clarity. My development process focuses on what truly matters: intuitive navigation, lightning-fast performance, and designs that communicate instantly.
More Section

Headline: Turning Ideas into Interactive Realities
Subheadline: Crafting Seamless Digital Experiences

Description:
As a full-stack developer with a deep passion for UX/UI design, I transform ideas into intuitive, engaging, and high-performance digital solutions. By blending clean code with user-centric design principles, I deliver experiences that are both visually striking and technically robust, driving measurable success for every project.

Changes: Streamlined the text for clarity and impact, emphasizing your dual expertise in development and design. Removed redundant phrases and tightened the wording to align with the minimalist aesthetic.



About Section

Section ID: about
Headline: About Me
Subheadline: Code-Driven | Design-Obsessed | User-Focused

Description:
I’m Agustin Morro, a full-stack developer based in Mendoza, Argentina. I specialize in crafting elegant, functional web applications using technologies like React, Node.js, and Three.js. My approach prioritizes simplicity, performance, and user satisfaction, ensuring every project is both aesthetically compelling and technically sound. With a keen eye for design and a disciplined coding process, I build solutions that resonate with users and achieve business goals.

Works Section

Headline: Works
Subheadline: A curated showcase of projects blending innovative technology with user-focused design.

Description:
Explore my portfolio of projects, each crafted to deliver seamless user experiences through modern development practices and thoughtful UX/UI design. From responsive web applications to interactive 3D visualizations, my work prioritizes impact and engagement.

Works2 Section

Headline: Simplicity is the New Sophistication
Description 1:
I specialize in creating digital experiences that marry aesthetic elegance with technical precision. My approach combines modern development techniques with a deep understanding of user behavior to deliver intuitive, high-performance solutions.

Description 2:
Great solutions don’t need complexity—just thoughtful craftsmanship.

Alternative Portfolio Text
Home Section
Navigation: Links to "Projects," "About," and "Contact."Title: Agustin MorroSubtitle: Full-Stack Developer | UX/UI Visionary  
Note: The subtitle emphasizes your dual expertise in development and UX/UI design, adding "Visionary" to convey creativity and forward-thinking.

More Section
Headline: Transforming Visions into Dynamic RealitiesSubheadline: Building Immersive Digital Experiences  
Description:As a full-stack developer with a passion for crafting user-centric interfaces, I create web solutions that are intuitive, visually captivating, and technically robust. By combining clean code with innovative design, I deliver experiences that engage users and drive results.


About Section: What About Me
Section ID: aboutHeadline: [ WHAT ABOUT ME ]Subheadline: CODE-DRIVEN | DESIGN-OBSESSED | USER-FOCUSED  
Description:I’m Agustin Morro, a full-stack developer based in Mendoza, Argentina, with a knack for turning complex ideas into elegant, functional applications. With expertise in technologies like React, Node.js, and Three.js, I build responsive, high-performance web solutions. My design philosophy prioritizes simplicity and user satisfaction, ensuring every project is both visually stunning and technically robust.

About Section: Who I Am
Section ID: about2Headline: [ MY CRAFT ]Subheadline: CREATIVE PROBLEM-SOLVER | TECH INNOVATOR | EXPERIENCE SHAPER  
Description:Based in Mendoza, Argentina, I’m a full-stack developer who thrives on blending creativity with technical precision. Using tools like React, Node.js, and Three.js, I craft seamless, interactive web experiences that prioritize user engagement. My approach is rooted in solving real-world problems with innovative solutions, always aiming to create digital products that are intuitive, impactful, and future-ready.


Works Section
Headline: WorksSubheadline: A collection of projects showcasing user-focused design and cutting-edge technology.  
Description:Discover my work, where innovative development meets thoughtful UX/UI design. Each project is crafted to deliver seamless functionality, striking visuals, and exceptional user experiences that leave a lasting impact.

Works2 Section
Headline: Simplicity Meets InnovationDescription 1:I create digital experiences that blend elegant design with robust functionality. My process leverages modern tools and a deep understanding of user needs to build solutions that are both intuitive and impactful.  
Description 2:Great design doesn’t shout—it resonates. Thoughtful solutions, crafted with care.  


Contact Section
Headline: Let's Create TogetherDescription 1:Ready to bring your vision to life? I deliver sleek, strategic, and user-focused digital solutions.  
Description 2:I’m excited to hear about your project. Reach out via email or social media to start building something extraordinary.  
Social Links:  

Email: [Copy-to-clipboard button with "Copied" feedback]  
Facebook: [Link to profile]  
Instagram: [Link to profile]

Footer: Agustin Morro  
Changes: Adjusted the headline to be collaborative and inviting. Rewrote the descriptions to be concise*/
