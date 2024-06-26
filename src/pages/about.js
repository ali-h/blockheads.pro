import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import TransitionEffect from "@/components/TransitionEffect";

// image imports
import AliH from "../../public/images/alih.jpg";
import TheGuruAsia from "../../public/images/theguruasia.jpg";
import Coininstant from "../../public/images/coininstant.png";
import Blockheads from "../../public/images/main-logo.png";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About - Blockheads</title>
        <meta name="description" content="Blockheads is a software development and support company that specializes in various technologies from Blockchain to Web Development." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-18">
          <AnimatedText
            text="What is Blockheads!?"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid mb-5 w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About us
              </h2>
              <p className="font-medium">
                Blockheads LLC is a premier software development and support company specializing in cutting-edge technologies, including Blockchain and Web Development. Our team, comprised of industry experts, is dedicated to delivering high-quality, innovative solutions tailored to meet the unique needs of our clients.
              </p>

              <h2 className="mb-4 mt-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Our Story
              </h2>
              <p className="font-medium">
              Our journey began with a shared vision of fueling innovation and building cutting-edge technologies. Ali H, TheGuruAsia, and Coininstant—three passionate individuals with a wealth of experience and a drive for excellence—came together to create this venture. With a strong foundation in the Hive blockchain, we have been providing a variety of services in this domain for years, gaining invaluable insights and expertise.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={Blockheads}
                alt="blockheads"
                className="w-full h-auto rounded-2xl"
                priority={true}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 text-center" style={{marginTop: "10rem"}}>
              <h1 className="mb-5 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Meet the Founders
              </h1>
              <div className="grid mt-5 w-full grid-cols-3 gap-8 sm:gap-4 sm:grid-cols-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden" style={{
                    borderTop: "5px solid #fff",
                    borderRight: "3px solid #fff",
                    borderLeft: "3px solid #fff",
                    boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.6)",
                  }}>
                    <Image
                      src={AliH}
                      alt="Ali H"
                      className="w-full h-full"
                      priority={true}
                      sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-dark dark:text-light">
                    Ali H
                  </h3>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                    CTO
                  </p>
                  
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                    Ali H, our Chief Technology Officer and lead developer, has a deep understanding in Tech. He is experienced in major technologies like Node.js, web, and app development, with special expertise in back-end development. Ali holds a bachelor's degree in Software Engineering from KFUEIT Pakistan and has over 4 years of experience in Node.js and blockchain development. His innovative mindset and pursuit of excellence have been key in shaping our company’s direction.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden" style={{
                    borderTop: "5px solid #fff",
                    borderRight: "3px solid #fff",
                    borderLeft: "3px solid #fff",
                    boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.6)",
                  }}>
                    <Image
                      src={Coininstant}
                      alt="Coininstant"
                      className="w-full h-full"
                      priority={true}
                      sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-dark dark:text-light">
                    Nick Thompson
                  </h3>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                    CEO
                  </p>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                    Nick, our Chief Executive Officer, has a strong background in business and software development. He combines his development skills with strategic leadership to guide the company towards its long-term goals. Nick graduated from the University of Hawaii at Manoa College of Business and has extensive experience in business management. His commitment to quality and staying ahead of technological trends ensures our solutions are always cutting-edge.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden" style={{
                    borderTop: "5px solid #fff",
                    borderRight: "3px solid #fff",
                    borderLeft: "3px solid #fff",
                    boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.6)",
                  }}>
                    <Image
                      src={TheGuruAsia}
                      alt="TheGuruAsia"
                      className="w-full h-full"
                      priority={true}
                      sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-dark dark:text-light">
                    Charith Athukorala
                  </h3>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                    COO
                  </p>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                    Charith, is our Chief Operating Officer with a wealth of knowledge in web development and software engineering. He oversees management, financial, and logistical aspects of our operations. Charith holds an MS in Information Management and a BS in Information Technology from the Sri Lanka Institute of Information Technology, and has over 14 years of experience as an IT executive. His strategic thinking and technical prowess have earned him a reputation in the industry.
                  </p>
                </div>
              </div>
          </div>

          <div className="w-full mt-5 text-center" style={{marginTop: "5rem"}}>
              <h1 className="mb-5 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Our Mission
              </h1>
              <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
              Our mission is to empower our clients by providing unparalleled support and innovative solutions that drive their success. We believe in building long-term relationships based on trust, transparency, and mutual respect. Our goal is to be a reliable partner that helps our clients navigate the complexities of technology and achieve their strategic objectives.
              </p>
          </div>

          <div className="w-full mt-5 text-center" style={{marginTop: "5rem"}}>
              <h1 className="mb-5 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Contact Us
              </h1>
              <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
              If you have any questions or would like to learn more about our services, please feel free to contact us. We are always happy to help and look forward to hearing from you.
              </p>

              <div className="mt-5">
                <div className="flex flex-col gap-3 mt-5">
                  <div className="flex justify-center gap-2 ml-4">
                    <a href="mailto:blockheads.professionals@gmail.com" className="flex items-center  px-4 py-2 text-base font-medium text-white bg-dark rounded-lg dark:bg-light dark:text-dark">
                      Email Us
                    </a>
                    <a href="tel:+1 (808) 446-9985" className="flex items-center  px-4 py-2 text-base font-medium text-white bg-dark rounded-lg dark:bg-light dark:text-dark">
                      Call Us
                    </a>
                    <a href="https://wa.me/18084469985" target="_blank" className="flex items-center  px-4 py-2 text-base font-medium text-white bg-dark rounded-lg dark:bg-light dark:text-dark">
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-center  ml-4">
                    <a href="mailto:blockheads.professionals@gmail.com" className="flex items-center  px-4 py-2 text-base font-medium text-dark/75 dark:text-light/75">
                      blockheads.professionals@gmail.com
                    </a>
                    <a href="tel:+1 (808) 446-9985" className="flex items-center  px-4 py-2 text-base font-medium text-dark/75 dark:text-light/75">
                      +1 (808) 446-9985
                    </a>
                  </div>
                </div>
              </div>
          </div>

          <Skills />
          <Projects />
        </Layout>
      </main>
    </>
  );
};

export default about;
