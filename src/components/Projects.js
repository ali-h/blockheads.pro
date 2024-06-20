import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ postition, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {postition}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            🔗{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Projects
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            postition="jsonDoctor"
            company=""
            companyLink="https://github.com/ali-h/jsonDoctor"
            time="2020"
            address="Hive Blockchain"
            work="A tool to broadcast and stream incoming custom_json transactions on Hive Blockchain."
          />

          <Details
            postition="Swap Hive"
            company=""
            companyLink="https://uswap.app/"
            time="2021"
            address="Hive Blockchain"
            work="The Hiveupme Discounted Bridge, now introducing the industry's lowest fee (0.09%), near-instant swaps between Hive | Swap.Hive | Vault."
          />

          <Details
            postition="HELIOS"
            company=""
            companyLink="https://helios.surf"
            time="2021"
            address="Hive Blockchain"
            work="Microservices on top of hive blockchain, A curation project to support individuals and generate ROI for investors."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
