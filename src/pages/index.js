import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/images/main-logo.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockheads</title>
        <meta name="description" content="Blockheads - Blockchain, Web, Mobile, Desktop, and More!" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full flex justify-center">
              <Image
                src={Logo}
                alt="Logo"
                className="h-auto lg:hidden md:inline-block md:w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Blockchain, Web, Mobile, Desktop, and More!"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                We are a software development and support company that specializes in various technologies from Blockchain to Web Development. We are a team of highly motivated and skilled individuals that are always ready to take on new challenges and deliver the best results.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/about"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base
                "
                >
                  Contact <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Light Bulb"
            className="w-full h-auto"
          ></Image>
        </div>
      </main>
    </>
  );
}
