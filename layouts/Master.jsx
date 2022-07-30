import Footer from "./Footer";
import Header from "./Header";

const Master = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Master;
