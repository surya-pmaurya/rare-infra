import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
