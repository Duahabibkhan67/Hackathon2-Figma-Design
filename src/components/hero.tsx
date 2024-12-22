import Link from "next/link";
import Image from "next/image";


export default function Hero(){
 return(
<div>
<div className="relative w-[1440] h-[716.83px]">
  <Image
    className="object-cover"
    src="/hero1.jpg"
    alt="Banner"
    layout="fill" 
    quality={100}
  />
</div>

   {/* section2 */}
   <section>
    <div className="text-center my-9">
      <h1 className="text-4xl font-bold">Browse The Range</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <section className="sm:grid sm:grid-cols-3">
      <div className="mx-4 ">
      <Image  height={800} width={700} src="/cardimg1.png" alt="cardimg"></Image>
      <h1 className="text-2xl font-bold text-center">Dining</h1>
      </div>
    
      <div className="mx-4 ">
      <Image  height={600} width={500} src="/cardimg2.png" alt="cardimg"></Image>
      <h1 className="text-2xl font-bold text-center">Living</h1>
      </div>
    
      <div className="mx-4 ">
      <Image  height={400} width={400} src="/cardimg3.png" alt="cardimg"></Image>
      <h1 className="text-2xl font-bold text-center">Bedroom</h1>
      </div>
    </section>
   </section>

   {/* thirdsection */}
   <section className="my-9">
    <h1 className="text-4xl font-bold text-center">Our Products</h1>
    <section className="sm:grid sm:grid-cols-4 mx-4 my-9">
    <div  className="w-[285px] h-[446px]">
 <Image width={100} height={200} src="/shop1.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
<div className="bg-[#F4F5F7]">
<h1 className="font-bold mx-4 my-2">Sytherie</h1>
 <p className="text-gray-300 mx-4 my-2">syntehreidcoror</p>
 <h1 className="font-bold mx-4 my-2">Rp 2500,000</h1>
</div>
</div>

<div className="w-[285px] h-[446px]">
 <Image width={100} height={200} src="/shop5.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
<div className="bg-[#F4F5F7]">
<h1 className="font-bold mx-4 my-2">Leviosa</h1>
 <p className="text-gray-300 mx-4 my-2">syntehreidcoror</p>
 <h1 className="font-bold mx-4 my-2">Rp 4500,000</h1>
 </div>
</div>
<div className="w-[285px] h-[446px]">
 <Image width={100} height={200} src="/shop3.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
<div className="bg-[#F4F5F7]">
<h1 className="font-bold mx-4 my-2">Lolito</h1>
 <p className="text-gray-300 mx-4 my-2">syntehreidcoror</p>
 <h1 className="font-bold mx-4 my-2">Rp 500,000</h1>
 </div>
</div>
<div className="w-[285px] h-[446px]">
 <Image width={100} height={200} src="/shop2.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
<div className="bg-[#F4F5F7]">
<h1 className="font-bold mx-4 my-2">Respira</h1>
 <p className="text-gray-300 mx-4 my-2">syntehreidcoror</p>
 <h1 className="font-bold mx-4 my-2">Rp 6500,000</h1>
 </div>
</div>
<div  className="w-[285px] h-[446px]">
 <Image width={100} height={200} src="/shop1.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
<div className="bg-[#F4F5F7]">
<h1 className="font-bold mx-4 my-2">Sytherie</h1>
 <p className="text-gray-300 mx-4 my-2">syntehreidcoror</p>
 <h1 className="font-bold mx-4 my-2">Rp 2500,000</h1>
</div>
</div>

<div className="w-[285px] h-[446px]">
 <Image width={100} height={200} src="/shop5.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
<div className="bg-[#F4F5F7]">
<h1 className="font-bold mx-4 my-2">Leviosa</h1>
 <p className="text-gray-300 mx-4 my-2">syntehreidcoror</p>
 <h1 className="font-bold mx-4 my-2">Rp 4500,000</h1>
 </div>
</div>
<div className="w-[285px] h-[446px]">
 <Image width={100} height={200} src="/shop3.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
<div className="bg-[#F4F5F7]">
<h1 className="font-bold mx-4 my-2">Lolito</h1>
 <p className="text-gray-300 mx-4 my-2">syntehreidcoror</p>
 <h1 className="font-bold mx-4 my-2">Rp 500,000</h1>
 </div>
</div>
<div className="w-[285px] h-[446px]">
 <Image width={100} height={200} src="/shop2.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
<div className="bg-[#F4F5F7]">
<h1 className="font-bold mx-4 my-2">Respira</h1>
 <p className="text-gray-300 mx-4 my-2">syntehreidcoror</p>
 <h1 className="font-bold mx-4 my-2">Rp 6500,000</h1>
 </div>
</div>
    </section>
    <Link href="/shop"><button className=" ml-96 border border-[#B88E2F] hover:bg-[#B88E2F] text-black w-[222px] h-[74px] hover:scale-105 mx-4 my-9 ">Show More</button></Link>
   </section>


   {/* four section */}
   <section className="flex bg-[#FCF8F3] ">
    <div className="mt-24 mx-11">
      <h1 className="text-6xl font-bold ">50+  Beautiful rooms For Inspiration</h1>
      <p className="text-gray-700">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
      <Link href="/shop"><button className="bg-[#B88E2F] w-[222px] h-[74px] hover:scale-105 mx-4 my-9 text-white">Explore More</button></Link>
    </div>
    <div className="flex mx-9 my-11 gap-8">
    <Image  width={100} height={200} src="/hthimg1.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
    <Image width={100} height={200} src="/htimg2.png" className="w-[285px] h-[301px] " alt="shop1"></Image>
    </div>
   </section>
</div>
 )
}


