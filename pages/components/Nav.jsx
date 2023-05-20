import Image from "next/image";



const Nav = () => {
    return ( 
        <div className="flex justify-between p-10 bg-blue-200">
            <div>
                <Image
                src='/logo.png'
                width={100}
                height={100}
                alt="logo"    
                 />
            </div>
            <div className="space-x-6 font-semibold text-center">
                <a href="">Buy</a>
                <a href="">Sell</a>
                <a href="">Rent</a>
            </div>

            <a className="bg-blue-800 p-3 text-white text-center rounded-md mb-2" href="">Connect</a>
            
        </div>
     );
}
 
export default Nav;