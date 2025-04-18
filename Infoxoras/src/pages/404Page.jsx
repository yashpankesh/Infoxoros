import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from '../components/ui/countup';
import TextPressure from '../components/ui/textpresure';
import BlurText from '../components/ui/blurtext';
import { ArrowUpRight } from 'lucide-react';
import StarBorder from '../components/ui/starborder';

const Page404 = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-zinc-900 text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto rounded-2xl bg-zinc-800 ">


        <div className="max-w-md text-center mt-12 mb-12">
          {/* <div className="mb-8">
            <img
            src="src\images\404_last.gif"
            alt="404 animation"
            className="w-full h-auto mx-auto max-w-xs rounded-lg "
            />
            </div> */}
          

<CountUp
  from={0}
  to={404}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-9xl "
/>



<BlurText
  text="Look like you're lost"
  delay={150}
  animateBy="words"
  direction="top"
  //   onAnimationComplete={handleAnimationComplete}
  className="text-5xl mb-8 mt-8"
/>
          {/* <h2 className="text-2xl font-semibold mt-4">Look like you're lost</h2>
          <p className="mt-2 text-white">The page you are looking for is not available!</p> */}
          <Link
            to="/"
            className="inline-block px-6 py-2 mt-6"
            >
            <button className="group flex gap-3 bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-green-300 hover:text-black transition-colors">
            Go to Home
          <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45"/>
          </button>
          </Link>
        </div>
      
      </div>
    </section>
  );
};

export default Page404;
