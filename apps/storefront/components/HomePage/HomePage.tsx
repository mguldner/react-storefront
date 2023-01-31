import { Carousel } from "@/components/Carousel";
import { Products } from "@/components/Products";
import { Join } from "@/components/Join";
import { Presentation } from "@/components/Presentation";
import { Links } from "@/components/Links";

export function HomePage() {
  return (
    <div className="bg-slate-900 mx-3 sm:mx-10 lg:mx-30 xl:mx-60 flex flex-col py-8">
      <Presentation />
      <Products />
      <Join />
      <Links />
    </div>
  );
}

export default HomePage;
