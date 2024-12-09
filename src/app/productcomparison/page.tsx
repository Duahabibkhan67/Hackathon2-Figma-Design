import Link from "next/link";
import Image from "next/image";

export default function Productcom(){
 return(
<div>
<div className="relative text-black">
                <Image
                    src="/productcom1.jpg" // Replace with the correct image file path
                    alt="Shop Banner"
                    height={400}
                    width={600}
                    className="w-[1440px] h-[200px] md:h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-5xl font-semibold">Product Comparison</h1>
                    <div className="mt-4 text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">
                            Home
                        </Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/blog" className="hover:underline">
                          Product Comparison
                        </Link>
                    </div>
                </div>
            </div>

       {/* section1 */}
     <section className="sm:grid xs:grid-cols-4 sm:mx-6 sm:my-4">
      <div className="mx-2 my-8">
       <h1 className="text-black text-3xl font-bold ">GO TO Product Page <br /> For More Products</h1>
       <button className="text-2xl my-3 "><ul>View More</ul></button>
      </div>

      <div className="mx-4 my-8 flex-col text-start">
       <Image className="bg-[#F9F1E7]" height={200} width={250} src="/productcom2.png" alt="product2"></Image>
       <h1 className="text-black text-xl font-bold">Asgard Sofa</h1>
       <p>Rs.250,000.00 <br /></p>
       <div className="flex">
        <p>4.5</p>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <hr /> <p className="mx-2">204 Reviews</p>
       </div>
</div>
 <div className="mx-2 my-8 flex-col text-start">
       <Image className="bg-[#F9F1E7]" height={300} width={300} src="/productcom3.png" alt="product2"></Image>
       <h1 className="text-black text-xl font-bold">Outdoor Sofa set</h1>
       <p>Rs.224,000.00 <br /></p>
       <div className="flex">
        <p>4.5</p>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <Image height={10} width={14} src="/star.png" alt="star"></Image>
       <hr /> <p className="mx-2">303 Reviews</p>
       </div>

      </div>
      <section>
       <div className="mx-2 my-8">
       <h1 className="text-black text-3xl font-bold ">Add A Product</h1>
       <button className="text-2xl bg-[#B88E2F] text-white my-6 w-auto">Choose a Product</button>
      </div>
       </section>
      
     </section>

     {/* section3 */}
     <section className="sm:grid xs:grid-cols-3 sm:mx-6 sm:my-4 border border-gray-300">
     
      
     <div className="mx-4 my-6 gap-2 ">
      <h1 className="font-bold text-2xl ">General</h1>
       <p>Sales Package </p>
       <p>Model Number</p>
       <p>Secondar Material</p>
       <p>Sales Package </p>
       <p>Model Number</p>
       <p>Secondar Material</p>
       </div>
      
       <div className="mx-4 my-11">
       <p>1 sectional Sofa </p>
       <p>Solid Wood</p>
       <p>L-Shaped</p>
       <p>1 sectional Sofa </p>
       <p>Solid Wood</p>
       <p>L-Shaped</p>
       </div>

       <div className="mx-4 my-6">
       <p>1 three seater,2 single seater </p>
       <p>Solid Wood</p>
       <p>L-shaped</p>
       <p>1 three seater,2 single seater </p>
       <p>Solid Wood</p>
       <p>L-shaped</p>
       </div>
      
      {/* Product */}
     
      <div className="mx-4 my-6 gap-2 ">
      <h1 className="font-bold text-2xl ">Product</h1>
       <p>Filling Material </p>
       <p>Finish Type</p >
       <p>Adjustable Headret</p>
       <p>Sales Package </p>
       <p>Model Number</p>
       
       </div>
      
     <div className="mx-4 my-11">
       <p>Foam </p>
       
       <p>Bright Grey & lion </p>
       <p>No </p>
       <p> 280kg</p>
       <p>India</p>
       </div>
       <div className="mx-4 my-11">
       <p>Foam </p>
       
       <p>Bright Grey & lion </p>
       <p>No </p>
       <p> 280kg</p>
       <p>India</p>
       </div>
       {/* Warranty */}
       <div className="mx-4 my-6 gap-2 ">
      <h1 className="font-bold text-2xl ">Warrranty</h1>
       <p>Warranty Summery </p>
       <p>Warranty Service Type</p >
       <p>Covered In Warranty</p>
       <p>Not Covered In Warranty </p>
       <p>Domestic Warranty</p>
       
       </div>
      
       <div className="mx-4 my-11">
       <p>1 Year Manucfacturing</p>
       
       <p>For Warranty Claims or Any product retailed issues please emails <br /> at opearations.</p>
       <p>Warranty Against manufacturing defected. </p>
       <p>the warranty dose not covered damages due to usage of the <br /> product beyond its extends use wear  <br />& tends.</p>
       <p>1 Year</p>
       <button className="w-[215px] h-[64px]  border-xl bg-[#B88E2F] text-white mx-3 my-6">Add To Cart</button>
       </div>

       <div className="mx-4 my-11">
       <p>1.2 year warranty  manufacturing warranty</p>
       
       <p>For Warranty Claims or Any product retailed issues please emails <br /> at opearations.</p>
       <p>Warranty Against manufacturing defected. </p>
       <p>the warranty dose not covered damages due to usage of the <br /> product beyond its extends use wear  <br />& tends.</p>
       <p>1 Year</p>
       <button className="w-[215px] h-[64px]  border-xl bg-[#B88E2F] text-white my-6">Add To Cart</button>
       </div>
  
      
      
    

       </section>
       </div>

       )
}