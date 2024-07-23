'use client';

import Image from "next/image";
import Button from '../components/Button';
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="">
        <section className="">
          <div className="flex flex-col items-center mx-auto px-4 ">
            <div className="w-full max-w-2xl lg:max-w-5xl mt-48 lg:mt-16">
              <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Plus Jakarta Sans'] tracking-wide">{"Hi, i'm "}<span className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold font-['Plus Jakarta Sans'] tracking-wide">Fatur.</span></h1>
              <h1 className="text-black text-xl sm:text-3xl lg:text-4xl font-medium font-['Plus Jakarta Sans'] tracking-wide">Developer and Graphic Designer,</h1>
              <h1 className="text-black text-xl sm:text-3xl lg:text-4xl font-medium font-['Plus Jakarta Sans'] tracking-wide">based on Wonogiri.</h1>
            </div>
          </div>
          <div className="h-[38rem] sm:h-[43rem] w-full mt-64 sm:mt-48 lg:mt-44 flex flex-col justify-center items-center">
            <div className="w-full h-full relative bg-gray-700 sm:relative sm:flex sm:flex-col sm:items-center">
              <Image src="/fatur.webp" alt="Fatur" width={1080} height={1080} priority={false} className="w-full object-contain lg:object-cover lg:h-full" />
              <div className="absolute bottom-0 w-full h-fit max-w-5xl bg-gray-700 lg:bg-gray-700/70 flex flex-col items-center sm:py-10">
                <h1 className="w-full px-10 md:px-20 text-justify">
                  <span className="text-white text-l font-normal font-['Plus Jakarta Sans']">I’m a </span>
                  <span className="text-white text-l font-bold font-['Plus Jakarta Sans']">developer</span>
                  <span className="text-white text-l font-normal font-['Plus Jakarta Sans']"> and </span>
                  <span className="text-white text-l font-bold font-['Plus Jakarta Sans']">graphic designer</span>
                  <span className="text-white text-l font-normal font-['Plus Jakarta Sans']"> who loves creating great mobile and web apps, as well as eye-catching graphics. I focus on making sure my work is user-friendly, efficient, and looks good.</span>
                  <br />
                  <br />
                  <span className="text-white text-l font-normal font-['Plus Jakarta Sans']">I keep up with industry standards and trends to provide the best solutions for my clients. Take a look at my work to see what I can do for you.</span>
                </h1>
                <Button onClick={() => { }} style="bg-white text-zinc-700 text-center text-white text-base font-medium font-['Plus Jakarta Sans'] mt-5 mb-8">
                  <Link href="/expedu">Check out my CV</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="h-fit">
          <div className="flex flex-col items-center my-28">
            <div className="w-full max-w-5xl">
              <div className="flex flex-col items-center">
                <h1 className="text-black text-5xl font-semibold font-['Plus Jakarta Sans']">What i do</h1>
              </div>
              <div className="flex flex-col items-center justify-center sm:flex-row mt-16 flex-wrap gap-20">
                <div className="w-96 flex flex-col justify-center items-center">
                  <h1 className=" text-black text-2xl font-semibold font-['Plus Jakarta Sans']">Mobile Apps Development</h1>
                  <ul className="text-center sm:text-justify sm:list-disc px-7 mt-7">
                    <li>Focus: Efficient performance and user-friendly interfaces. Delivers innovative solutions tailored to user needs and industry standards</li>
                    <li className="font-bold">Tech Stack:</li>
                  </ul>
                  <div className="flex flex-row items-center mt-6">
                    <Image src="/android.webp" alt="Android " width={224} height={224} className="w-fit h-14 mx-7"></Image>
                    <Image src="/swift.webp" alt="Swift " width={224} height={224} className="w-fit h-14 mr-7"></Image>
                    <Image src="/flutter.webp" alt="Android " width={224} height={224} className="w-fit h-14"></Image>
                  </div>
                  <Button onClick={() => { }} style="mt-10 ml-7 bg-zinc-700"><Link href="/works" className="text-center text-white text-base font-medium font-['Plus Jakarta Sans']">Check out my apps</Link></Button>
                </div>
                <div className="w-96 flex flex-col justify-center items-center">
                  <h1 className="text-black text-2xl font-semibold font-['Plus Jakarta Sans']">Web Development</h1>
                  <ul className="text-center sm:text-justify sm:list-disc px-7 mt-7">
                    <li>Focus: Efficient coding best practices, user experience. Delivers: Robust and scalable web solutions tailored to client requirements and industry best practices</li>
                    <li className="font-bold">Tech Stack:</li>
                  </ul>
                  <div className="flex flex-row items-center mt-6">
                    <Image src="/next.webp" alt="Next " width={224} height={224} className="w-fit h-14 mx-7"></Image>
                    <Image src="/laravel.webp" alt="Laravel " width={224} height={224} className="w-fit h-14 mr-7"></Image>
                    <Image src="/wordpress.webp" alt="Wordpress " width={224} height={224} className="w-fit h-14"></Image>
                  </div>
                  <Button onClick={() => { }} style="mt-10 ml-7 bg-zinc-700"><Link href="/works" className="text-center text-white text-base font-medium font-['Plus Jakarta Sans']">Check out my web</Link></Button>
                </div>
                <div className="w-96 flex flex-col justify-center items-center">
                  <h1 className="text-black text-2xl font-semibold font-['Plus Jakarta Sans']">Graphic Design</h1>
                  <ul className="text-center sm:text-justify sm:list-disc px-7 mt-7">
                    <li>Focus: Efficient workflows, creative, and user-centered design. Delivers innovative and visually appealing graphics aligned with client needs and industry trends</li>
                    <li className="font-bold">Tools:</li>
                  </ul>
                  <div className="flex flex-row items-center mt-6">
                    <Image src="/ai.webp" alt="Ai " width={224} height={224} className="w-fit h-14 mx-7"></Image>
                    <Image src="/ps.webp" alt="Ps " width={224} height={224} className="w-fit h-14 mr-7"></Image>
                    <Image src="/figma.webp" alt="Figma " width={224} height={224} className="w-fit h-14"></Image>
                  </div>
                  <Button onClick={() => { }} style="mt-10 ml-7 bg-zinc-700"><Link href="/works" className="text-center text-white text-base font-medium font-['Plus Jakarta Sans']">Check out my design</Link></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full h-[50rem] bg-gray-700 flex flex-gap justify-center items-center">
          <div className="flex flex-col items-center pt-32">
            <div className="w-full max-w-5xl">
              <h1 className="text-white text-2xl text-center font-semibold font-['Plus Jakarta Sans']">Contact me for business and collaboration opportunities!</h1>
            </div>
            <div className="w-full max-w-5xl mt-10 flex flex-col items-center flex-wrap justify-between gap-6">
              <div className="flex flex-row gap-4">
                <Image src="/linkedin.webp" alt="LinkedIn" width={1080} height={100} className="w-14 h-14" />
                <Image src="/instagram.webp" alt="LinkedIn" width={1080} height={100} className="w-14 h-14" />
                <Image src="/x.webp" alt="LinkedIn" width={1080} height={100} className="w-14 h-14" />
                <Image src="/github.webp" alt="LinkedIn" width={1080} height={100} className="w-14 h-14" />
              </div>
              <div className="w-full">
                <form action="/" className="flex flex-col gap-4 place-items-end w-full p-10">
                  <input type="text" id="name" name="name" placeholder="Name" className="w-full h-10 sm:h-14 bg-zinc-700 placeholder:text-gray-400 p-4 text-white text-xl font-medium font-['Plus Jakarta Sans']"></input>
                  <input type="email" id="email" name="email" placeholder="Email" className="w-full h-10 sm:h-14 bg-zinc-700 placeholder:text-gray-400 p-4 text-white text-xl font-medium font-['Plus Jakarta Sans']"></input>
                  <input type="number" id="phone" name="phone" placeholder="Phone" className="w-full h-10 sm:h-14 bg-zinc-700 placeholder:text-gray-400 p-4 text-white text-xl font-medium font-['Plus Jakarta Sans']"></input>
                  <textarea id="textarea" name="message" rows={6} cols={50} placeholder="Type your message here..." className="w-full bg-zinc-700 placeholder:text-gray-400 p-4 text-white text-sm font-medium font-['Plus Jakarta Sans']"></textarea>
                  <Button onClick={() => { }} style="bg-zinc-700"><input type="submit" className="text-center text-white text-base font-medium font-['Plus Jakarta Sans']"></input></Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main >
  );
}
