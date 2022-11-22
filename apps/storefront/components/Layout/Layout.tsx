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
      <Navbar />
      <div className="align-middle flex flex-col flex-grow">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
