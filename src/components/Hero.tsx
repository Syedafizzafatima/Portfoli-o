import React from "react";
import Navbar from "./Navbar";

const Hero = ()=>{
    return (
<div  id="hero" className="min-h-screen bg-no-repeat bg-[url(/project_0.jpg)] bg-left lg:bg-[15%] bg-cover"
style={{backgroundSize:"35%"}}>

<Navbar />
<div className='container grid lg:grid-cols-2 h-[calc(100vg-60px)]'>
     <div className="hidden lg:block"></div>
     <div className="tect-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
        <div> <p data-aos="zoom-out-left"> I'm</p>
                <p data-aos="zoom-out-left"> Syeda</p>
                  <p data-aos="zoom-out-left"> Fizza</p>
        </div>
     </div>
     </div>
</div>
    )
}
export default Hero