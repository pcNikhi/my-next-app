// import { AppProps } from 'next/app';
// import { Provider } from "react-redux";
// import { store } from "../src/toolkit/store";

import "../styles/globals.css";
import TableData from "../src/components/table";
import Navbar from "../src/components/Navbar";
import Slidebar from "../src/components/slidebar";
function MyApp({ Component, pageProps }) {
  const AnyComponent = Component as any;

  return (
    <div className="grid grid-cols-12 gap-6 px-6 my-14 lg:px-48">
      <div className="col-span-12 bg-white lg:col-span-3 rounded-2xl "> <Slidebar/></div>
      <div className="col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl">
      <Navbar/>
        <AnyComponent {...pageProps} /> 
      </div>
      
    </div>
  );
}
export default MyApp;
