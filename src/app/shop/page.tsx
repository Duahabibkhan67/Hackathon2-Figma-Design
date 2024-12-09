import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";


export default function ShopHero() {
 

  return (
    <>
      {/* shopsect */}
      <div className="relative">
        <Image className="sm:w-[1440px] sm:h-[100px] md:h-auto object-cover" width={600} height={400} src="/productcom1.jpg" alt="Picture of the author" />
        <div className="absolute top-[50%] left-[50%] sm:flex sm:justify-center sm:flex-col sm:items-center ">
          <h3 className="font-bold text-[3rem]">Shop</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>
           {/* first layout */}
           <section className="flex justify-between  gap-4 bg-[#9F9F9F]">
            <div className="flex  mx-6 ">
             <Image height={10} width={50} src="/shoplogo1.png" alt="shoplogo1"></Image>
             <h1 className="text-xl mx-4 my-6">Filter</h1>
             <Image height={5} width={50} src="/shoplogo2.png" alt="shoplogo1"></Image>
             <Image height={10} width={50} src="/shoplogo3.png" alt="shoplogo1"></Image>
             <h1 className="text-xl mx-4 my-6">Showing 1-12 results</h1>
            </div >
            
              <div className="lg:flex ">
              <h1 className="text-xl mx-2 my-4">Show</h1>
            <p className="border bg-white text-gray-400  h-[55px] w-[55px] mx-2 my-4">16</p>
            <h1 className="text-xl mx-4 my-4">Sort By</h1>
            <p className="border bg-white text-gray-400 w-[188px] h-[55px] mx-2 my-4">Default</p>
              </div>
           </section>

{/* second layout */}
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


        {/* <div> */}
     
      <div className=" flex gap-2 justify-center " >
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">1</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">2</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">3</button>
     <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">Next</button>

</div>
      <div className="flex justify-evenly items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
        
        < div className="">
    
        <Image src="/Group1.png" width={40} height={40} alt="Picture of the author" />
        
          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
        <Image src="/group2.png" width={40} height={40} alt="Picture of the author" />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
        <Image src="/group3.png" width={40} height={40} alt="Picture of the author" />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div>
        <Image src="/group4.png" width={40} height={40} alt="Picture of the author" />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
   
    </>
  );
}