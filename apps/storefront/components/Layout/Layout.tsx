import { FooterSimplified } from "../FooterSimplified";
import { Navbar } from "../Navbar";

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`bg-fixed bg-center bg-cover bg-[url('../public/image_bg.jpg')]`}>
        <Navbar />
        <div className="h-screen"></div>
        <div className="bg-sky-800">
          <div className="align-middle flex flex-col flex-grow">{children}</div>
          <FooterSimplified />
        </div>
      </div>
    </>
  );
}

export default Layout;
