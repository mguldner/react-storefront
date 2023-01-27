import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { SocialBanner } from "../SocialBanner";

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SocialBanner />
      <div className="bg-fixed bg-center bg-cover bg-[url('../public/image_bg.jpg')]">
        <Navbar />
        <div className="h-screen"></div>
        <div className="bg-sky-800">
          <div className="align-middle flex flex-col flex-grow">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
