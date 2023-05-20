import Image from "next/image";



const Hero = () => {
    return ( 

        <div className="flex items-center bg-blue-200">
            <div>
                <h1 className=" text-5xl font-bold p-9 ml-10">Let's find a home perfect for you</h1>
                <p className="p-9 ml-10 text-l">By choosing us, you can be assured that your real estate transactions will be secure, transparent, and efficient.</p>
                <div className="p-9">
                <a className="bg-blue-800 p-3 text-white text-center rounded-md mb-2 ml-10" href="">Buy Now</a>
                </div>

            </div>

            <Image
             src='/house.png'
             height={900}
             width={900}
             alt="Home"
             className="p-10"
            />
        </div>
     );
}
 
export default Hero;