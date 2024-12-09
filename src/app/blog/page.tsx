
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
export default function Blog(){
 return(


 <div>
<div className="relative">
        <Image className="sm:w-[1440px] sm:h-[100px] md:h-auto object-cover" width={600} height={400} src="/productcom1.jpg" alt="Picture of the author" />
        <div className="absolute top-[50%] left-[50%] sm:flex sm:justify-center sm:flex-col sm:items-center ">
          <h3 className="font-bold text-[3rem]">Blog</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Blog</h3>
          </div>
        </div>
        </div>

        {/* blog section */}
        <section className="sm:grid sm:grid-cols-2 mx-4 my-6">
<section className="mx-11 sm:flex flex-col">

<div className="my-9">
 <Image height={200} width={200} className="w-[500px] h-[300px] " src="/blog1.png" alt="blog1"></Image>
<div className="flex my-4">
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo1.png" alt="blog1"></Image>
<h1 className="text-gray-400">Admin</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo2.png" alt="blog1"></Image>
<h1 className="text-gray-400">14 oct 2024</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo3.png" alt="blog1"></Image>
<h1 className="text-gray-400">world</h1>
</div>
<h1 className="text-4xl font-bold my-4 ">Going All-in With Millenial Design</h1>
<p>
em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
</p>
</div>


<div className="my-9">
 <Image height={200} width={200} className="w-[500px] h-[300px] " src="/blog2.png" alt="blog1"></Image>
<div className="flex my-4">
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo1.png" alt="blog1"></Image>
<h1 className="text-gray-400">Admin</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo2.png" alt="blog1"></Image>
<h1 className="text-gray-400">14 oct 2024</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo3.png" alt="blog1"></Image>
<h1 className="text-gray-400">world</h1>
</div>
<h1 className="text-4xl font-bold my-4 ">Going All-in With Millenial Design</h1>
<p>
em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
</p>
</div>


<div className="my-9">
 <Image height={200} width={200} className="w-[500px] h-[300px] " src="/blog3.png" alt="blog1"></Image>
<div className="flex my-4">
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo1.png" alt="blog1"></Image>
<h1 className="text-gray-400">Admin</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo2.png" alt="blog1"></Image>
<h1 className="text-gray-400">14 oct 2024</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo3.png" alt="blog1"></Image>
<h1 className="text-gray-400">world</h1>
</div>
<h1 className="text-4xl font-bold my-4 ">Going All-in With Millenial Design</h1>
<p>
em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
</p>
</div>
</section>

{/* blogsec2 */}

<section>
 <div className="w-[350px] h-15 border border-gray-600 mt-20 ml-44 rounded-xl">
 <Image width={30} height={50} className=" rounded-2xl my-2 ml-72 "  src="/vector3.png" alt="searchbar"></Image>
 </div>
 <div className="ml-44">
  <h1 className="mx-2 my-4 font-bold text-2xl">Categories</h1>
  <p className="text-gray-600 flex my-9">Crafts <br /><p className="ml-52">2</p></p>
  <p className="text-gray-600 flex my-9">Design<br /><p className="ml-52">8</p></p>
  <p className="text-gray-600 flex my-9">Handmade <br /><p className="ml-44">6</p></p>
  <p className="text-gray-600 flex my-9">Wood <br /><p className="ml-52">4</p></p>
 
 </div>
</section>
        </section>
 </div>
  )
}