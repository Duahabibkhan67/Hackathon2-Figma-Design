import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import {
 Sheet,
 SheetContent,


 SheetTrigger,
} from "@/components/ui/sheet";


export default function Navbar() {
  return (
    <div className="w-full h-[100px] bg-white flex">
      <div className="flex items-center sm:w-[1286px] sm:mx-auto">
        {/* Logo */}
        <Image
          src="/Frame 168.png"
          alt="Logo"
          width={185}
          height={41}
          className="mr-6"
        />

        {/* Navigation Links */}
        <div className=" gap-[56px] pl-[20px] ml-[100px] text-lg hidden md:flex">
          <Link href="/"><h2 className="cursor-pointer font-bold hover:scale-105">Home</h2></Link>
          <Link href="/shop"><h2 className="cursor-pointer font-bold hover:scale-105">Shop</h2></Link>
          <Link href="/blog"><h2 className="cursor-pointer font-bold hover:scale-105">Blog</h2></Link>
         <Link href="/contact"><h2 className="cursor-pointer font-bold hover:scale-105">Contact</h2></Link> 
        </div>

        {/* Vector Icons */}
        <div className="md:flex ml-auto gap-[40px] hidden ">
          <div className="w-[28px] h-[28px] hover:scale-105">
            <Link href="/productcomparison"><img src="/Vector2.png" alt="Person" /></Link>
          </div> 
          <div>
          <img src="/Vector3.png" alt="Wishlist" />

         
          </div> 
          <div className="w-[28px] h-[28px] hover:scale-105">
          <img src="/Vector4.png" alt="Wishlist" />
          </div> 
          <div className="w-[28px] h-[28px] hover:scale-105">
           <Link href="/cart"><img src="/Vector5.png" alt="Cart" /></Link> 
          </div> 
        </div>
  </div>
      <Sheet>
  <SheetTrigger className="md:hidden text-3xl  ">
  <TiThMenu />
   </SheetTrigger>
  <SheetContent  className="bg-gray-100 text-black p-6">
  
  <div className="flex-col  flex gap-4 px-6 py-4   ">
<Link href="/"><button className="text-xl  hover:scale-110 hover:underline-offset-1"><b>Home</b></button></Link>
<Link href="/shop"><button className="text-xl    hover:scale-110  hover:underline"><b>Shop</b></button></Link>
<Link href="/blog"><button  className="text-xl hover:scale-110"><b>Blog</b></button></Link>
<Link href="/contact"><button className="text-xl   hover:scale-110"> <b>Contact</b></button></Link>


     
    

</div>

  </SheetContent>
</Sheet>
    </div>
  );
}