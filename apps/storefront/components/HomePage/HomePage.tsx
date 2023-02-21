import { Products } from "@/components/Products";
import { Join } from "@/components/Join";
import { Presentation } from "@/components/Presentation";
import { Links } from "@/components/Links";
import clsx from "clsx";
import styles from "./Homepage.module.css";

export function HomePage() {
  return (
    <div>
      <div className="h-screen">
        <p className="text-white text-9xl sm:text-xxl font-display text-center animate-text-pop-up-top-3">
          Psyaïeaïe
        </p>
        <p className="text-white text-9xl font-display text-center">
          <span className="animate-[text-flicker-in-glow_6s_linear_both]">S</span>
          <span className="animate-[text-flicker-in-glow_5s_linear_both]">t</span>
          <span className="animate-[text-flicker-in-glow_3s_linear_both]">u</span>
          <span className="animate-[text-flicker-in-glow_4s_linear_both]">d</span>
          <span className="animate-[text-flicker-in-glow_1s_linear_both]">i</span>
          <span className="animate-[text-flicker-in-glow_5s_linear_both]">o</span>
        </p>
      </div>
      <div className="bg-[#194452]">
        <div className="bg-[#202020] mx-3 sm:mx-10 lg:mx-30 xl:mx-96 flex flex-col py-8">
          <Presentation />
          <Products />
          <Join />
          <Links />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
