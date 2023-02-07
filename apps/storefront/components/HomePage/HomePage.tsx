import { Products } from "@/components/Products";
import { Join } from "@/components/Join";
import { Presentation } from "@/components/Presentation";
import { Links } from "@/components/Links";

export function HomePage() {
  return (
    <div className="bg-[#202020] mx-3 sm:mx-10 lg:mx-30 xl:mx-96 flex flex-col py-8">
      <Presentation />
      <Products />
      <Join />
      <Links />
    </div>
  );
}

export default HomePage;
