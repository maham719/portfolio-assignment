
export default function Home() {
  return (
    <div className="porfolio-container flex flex-col justify-center items-center">
        <div className=" flex justify-evenly items-center min-h-screen  container  ">
          <div className="intro ">
          <p className="text-2xl ">Hi , i&#39;m</p>
          <h1>Syeda Maham Amjad</h1>
          
         
         <h3 className="text-2xl font-semibold text-[#050005 ]">Associate Engineer in Computer Information Technology</h3>
         </div>
         <div className="image-container">
          <div className="image"></div>
          </div>     
          
        
        </div>
        <div className="skills-title text-center">
          <h1>SKILLS</h1>
        </div>
        <div className="skills-bars flex justify-evenly">
          <div className="skill-1">
            <div className="flex justify-between"><h6>HTML</h6><h6>95%</h6></div>
            <div className="bar"><div className="bar-1"></div></div><br />
            <div className="flex justify-between"><h6>CSS</h6><h6>75%</h6></div>
          <div className="bar"><div className="bar-2"></div></div>
          </div>
          <div className="skill-2">
          <div className="flex justify-between"><h6>Javascript</h6><h6>80%</h6></div>
          <div className="bar"><div className="bar-3"></div></div><br />
          <div className="flex justify-between"><h6>Typescript</h6><h6>95%</h6></div>
          <div className="bar"><div className="bar-4"></div></div>
          </div>
        </div>
         <br />
        <div className="portfolio-title text-center">
        <h1>GALLERY</h1></div> 
        <div className="gallery">
          <div className="img img-1"></div>
          <div className="img img-2"></div>
          <div className="img img-3"></div>
          <div className="img img-4"></div>
          <div className="img img-5"></div>
          <div className="img img-6"></div>
        </div>

        </div>
  );
}
