export default function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="about-title">
        <h1 className="text-center">ABOUT</h1>
      </div>
      <div className="about">
        <p className="text-xl">
          
          i am a skilled individual with a 3-year diploma in Computer Information
          Technology (CIT) currently advancing my knowledge as a student in the
          Gen AI course under GIAIC. I am passionate about leveraging technology
          to solve problems and continuously enhancing my expertise in related
          fields.
        </p></div>
        <div className="bio flex flex-col justify-between items-center gap-4 flex-wrap">
         <div className="flex justify-evenly items-center w-full item">
            <p>
              <b>Name:</b> Syeda Maham Amjad
              </p>
            <p>
              <b>Date Of Birth:</b> 2nd August 1995
            </p>
            </div>       
           
           <div className="flex justify-evenly items-center w-full item ">
            <p>
              <b>Qualification:</b> DAE (CIT)
            </p>
            <p>
              <b>Address:</b>123 Street, New York, USA
            </p>
            </div>
          
          <div className="flex justify-evenly items-center w-full item ">
            <p>
              <b>Email:</b> zohameer96@gmail.com
            </p>
            <p>
              <b>Phone No:</b> +012 345 6789
            </p>
            </div>
        </div>
      
    </div>
  );
}
