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
import AliH from "../../public/images/alih.jpeg";
import TheGuruAsia from "../../public/images/theguruasia.png";
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
              We are a dynamic team of highly motivated and skilled professionals, dedicated to delivering exceptional results across a broad spectrum of technologies, from Blockchain to Web Development.
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
                  <div className="relative w-40 h-40 rounded-full overflow-hidden">
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
                    Ali H is our Lead Developer with a deep understanding of blockchain technology and its potential to revolutionize industries. As our Chief Technology Officer and lead developer, Ali H has a mastery over all major technologies like Node, Web & App Deveopment with speical experience in Back-end development. His innovative mindset and relentless pursuit of excellence have been instrumental in shaping our company’s direction and success.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden">
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
                    Coininstant
                  </h3>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                    CEO
                  </p>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                  With a strong background in both blockchain and software development, Coininstant is a driving force behind our technical operations. As our Chief Executive Officer and management head, he combines his development skills with strategic leadership, guiding the company towards its long-term goals. His commitment to quality and his knack for staying ahead of technological trends ensure that our solutions are always cutting-edge.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden">
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
                    TheGuruAsia
                  </h3>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                    COO
                  </p>
                  <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75">
                  Known for his strategic thinking and technical prowess, TheGuruAsia brings a wealth of knowledge in web development and software engineering. His ability to navigate complex challenges and deliver robust solutions has earned him a reputation as a guru in the industry. As our Chief Operating Officer, he oversees management, financial, and logical aspects of our operations, ensuring that everything runs smoothly and efficiently.
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

          <Skills />
          <Projects />
        </Layout>
      </main>
    </>
  );
};

export default about;
