import {Montserrat} from "next/font/google"
import Link from "next/link"
const montserrat = Montserrat({
  subsets:["latin"],
  weight:["400" , "700"],
  display: "swap"
})
export default function Home(){
  return(
    <div id="Home" className="bg-[#252B42] h-[1132px] w-[1440px] py-[-590px] px-[-720px] mx-auto">
      <div>
       <nav id="nav-style" className="text-white flex justify-around items-center h-91px w-1322px top-20px" >
        <div id="brand" className="h-58px w-187 relative py-17px px-136px ">
          <h3 style={{fontStyle : montserrat.className , fontWeight:700 , fontSize:24 }} className="text-white text-24px tracking-0.1px leading-32" >Brand Name</h3>
        </div>

        <div>
          <ul className="flex text-center space-x-10  tracking-0.2 leading-24px" style={{fontStyle: montserrat.className , fontWeight:400 ,fontSize:14 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Product">Product</Link>  </li>
            <li><Link href="/Pricing">Pricing</Link>  </li>
            <li><Link href="/Contact">contact</Link>   </li>
          </ul>
        </div>
       <div>
        <ul className="flex items-center space-x-10 tracking-0.2 leading-22px" style={{fontStyle: montserrat.className , fontWeight:400 ,fontSize:14 }}>
        <li><Link href="/login" >Login</Link></li>
         <button className="bg-[#23A6F0] w-[110px] h-[52px] py-15 pr-25 pb-15 px-25 gap-15  rounded-md tracking-0.2 leading-22px" ><li><Link href="/joinus"></Link>Join Us</li></button> 
        </ul>
       </div>
       </nav>
      </div>



      <div id=" main-container" className="w-[1046px] h-[1028px] top-[104px] left[197px] pt-[80px] pb-[80px] gap-   [80px] mx-auto">
      <div id="row" className="flex flex-row mx-auto h-[496px] w-[701px]">
<div id="main-content" className="w-[699px] h-[496px] pt-[40px] pb-[40px] gap-[40px] justify-center"> 
      <div className=" mx-auto text-center space-x-10" style={{fontStyle: montserrat.className , fontWeight:400 ,fontSize:14 }}>
           <h3 className="text-[#23A6F0] mx-auto w-[77] h-[24] tracking-0.1 leading-24px" style={{fontStyle: montserrat.className , fontWeight:400 ,fontSize:16 }}>Welcome</h3>
           </div>
           <div className="w-[77] h-[24] mx-auto text-center">
            <h3 className="text-[#FFFFFF] text-balance font-bold tracking-0.1 leading-30px" style={{fontStyle: montserrat.className , fontWeight:700 ,fontSize:56 }}>Selling on the internet like a pro</h3>
            </div>
            <div className="w-[536px] h-[60px] mx-auto text-center">
            <h3 className="text-[#FFFFFF]  justify-center  tracking-0.2 leading-30px" style={{fontStyle: montserrat.className , fontWeight:400 ,fontSize:20 }}>We know how large objects will act, but things on a 
            small scale just do not act that way.</h3></div>
            <br />
            <div id="cta" className="flex justify-center h-[52px] w-[365px] gap-[10px] mx-auto ">
              <div id="nta" className="bg-[#23A6F0] h-[52px] w-[193px] rounded-md pt-[15px] pr-[40px] pb-[15px] pl-[40px] ">
                <button className="text-[#FFFFFF] w-[113px] h-[22px] tracking-0.2 leading-22px" style={{fontStyle: montserrat.className , fontWeight:700 ,fontSize:14 }}>Get Quote Now</button>
              </div>
             
               <div id="nta" className=" h-[52px] w-[162px] rounded-md pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px] border border-1px border-[#23A6F0]"> 
                <button className="text-[#23A6F0] text-justify w-[113px] h-[22px] tracking-0.2 leading-22px" style={{fontStyle: montserrat.className , fontWeight:700 ,fontSize:14 }}>Learn More</button>
              
</div>
               
            </div>
</div>
 </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div className="flex  flex-row  gap-[30px] h-[292px] w-[1046px] justify-center">


    <div className="bg-[#FFFFFF] w-[328px] h-[292px] pt-[35px] pr[40px]">
      <div className=" bg-[#FFDCD1] mx-10 w-[70px] h-[76px] rounded-lg pt=[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px]"></div> 
      <br />
      <div className="h-[24px] w-[135px] mx-10">
      <h3 className="text-[#252B42]  leading-[24px] tracking-[0.1px]" style={{fontStyle: montserrat.className , fontWeight:700 ,fontSize:16 }}>training Courses</h3></div>
      <br />
      <div className=" bg-[#E74040] mx-10 w-[50px] h-[2px]"></div> <br />
      <div className="w-[222px] h-[60px] mx-10 tracking-[0.2px] leading-[20px]"><p className="text-[#737373]
" style={{fontStyle: montserrat.className , fontWeight:400 ,fontSize:14 }}>The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>

      </div>
      </div> 
<div className="bg-[#FFFFFF] w-[328px] h-[292px] pt-[35px] pr[40px]"> <div className=" bg-[#B9EAA8] mx-10 w-[70px] h-[76px] rounded-lg pt=[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px]"></div> 
      <br />
      <div className="h-[24px] w-[168px] mx-10">
      <h3 className="text-[#252B42]  leading-[24px] tracking-[0.1px]" style={{fontStyle: montserrat.className , fontWeight:700 ,fontSize:16 }}>2,769 online courses</h3></div>
      <br />
      <div className=" bg-[#E74040] mx-10 w-[50px] h-[2px]"></div> <br />
      <div className="w-[222px] h-[60px] mx-10 tracking-[0.2px] leading-[20px]"><p className="text-[#737373]
" style={{fontStyle: montserrat.className , fontWeight:400 ,fontSize:14 }}>The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>

      </div></div>







    <div className="bg-[#23A6F0] w-[328px] h-[292px] pt-[35px] pr[40px] "> <div className=" bg-[#FFFFFF] mx-10 w-[70px] h-[76px] rounded-lg pt=[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px]"></div> 
      <br />
      <div className="h-[24px] w-[135px] mx-10">
      <h3 className="text-[#FFFFFF]  leading-[24px] tracking-[0.1px]" style={{fontStyle: montserrat.className , fontWeight:700 ,fontSize:16 }}>training Courses</h3></div>
      <br />
      <div className=" bg-[#FFFFFF] mx-10 w-[50px] h-[2px]"></div> <br />
      <div className="w-[222px] h-[60px] mx-10 tracking-[0.2px] leading-[20px]"><p className="text-[#FFFFFF]
" style={{fontStyle: montserrat.className , fontWeight:400 ,fontSize:14 }}>The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>

      </div></div>
</div>
      </div>

      
       






















    </div>
  )
}