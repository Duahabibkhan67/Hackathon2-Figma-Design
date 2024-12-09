import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      <div className="relative">
        <Image className="sm:w-[1440px] sm:h-[100px] md:h-auto object-cover" width={600} height={400} src="/productcom1.jpg" alt="Picture of the author" />
        <div className="absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <h3 className="font-bold text-[1.5rem]">Cart</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>cart</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>

      <div className="">
        <div className=" sm:flex sm:justify-around sm:items-center mt-10 mx-11 p-4 w-[60%] h-[4rem] bg-[#F9F1E7] ">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div> 
        <div>

<br />            
<div className="sm:flex sm:justify-evenly gap-1 ">
            <Image className="sm:w-[150px] sm:h-[150px] mt-14 bg-[#F9F1E7]" src="/sofa1.png" width={100} height={200} alt="Picture of the author" />
            <p className="mt-14">Asgaard sofa</p>
            <p className="mt-14">Rs. 250,000.00</p>
            <input type="number" />
            <p className="mt-14">Rs. 250,000.00</p>


        <div className="cartTotal  bg-[#F9F1E7] text-center w-[20rem] h-[20rem] pt-[2rem] ">
          <h2 className="font-bold text-[1.5rem] my-2">Cart Totals</h2>
          <p><span className="font-bold">Subtotal </span>  Rs. 250,000.00</p>
          <p><span className="font-bold text-[#b88E2F]">Total</span> Rs. 250,000.00</p>

          <button className="mt-5 rounded-md border-gray-900 border-2 p-2 pr-3  pl-3 hover:scale-105 hover:bg-[#b88E2F]">Check Out</button>
        </div>
            </div>
        </div>

      </div>

      <div className="mb-3 mt-10 flex justify-evenly items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
        <div className=" ">
          <Image
            src="/Group1.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />

          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
          <Image
            src="/group2.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
          <Image
            src="/group3.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div>
          <Image
            src="/group4.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}