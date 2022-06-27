import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";

const Navitem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== "name" ? (
    <Link href={route}>
      <a>
        <span
          onClick={() => setActiveItem(name)}
          className="hover:text-green-500"
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("about");
    if (pathname === "/Form") setActiveItem("Form");
    if (pathname === "/Table") setActiveItem("Table");
  }, []);
  return (
    <div className="flex justify-between px-3 py-3 my-4">
      <span className="text-xl font-bold text-green-500 border-b-4 border-green-500">
        {activeItem}
      </span>
      <div className="flex space-x-3 text-red-800 font-lg">
        {/* {activeItem !== "about" && (
          <Link href="/">
            <a>
              <span  onClick={()=>setActiveItem('about')}>about</span>
            </a>
          </Link>
        )}
        {activeItem !== "projects" && (
          <Link href="/projects">
            <a>
              <span onClick={()=>setActiveItem('projects')}>projects</span>
            </a>
          </Link>
        )}
        {activeItem !== "resume" && (
          <Link href="/resume">
            <a>
              <span  onClick={()=>setActiveItem('resume')}>resume</span>
            </a>
          </Link>
        )} */}
        <Navitem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="about"
          route="/"
        />
        <Navitem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Form"
          route="/Form"
        />
        <Navitem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Table"
          route="/Table"
        />
        {/* <Navitem activeItem={activeItem} setActiveItem={setActiveItem} name='about' route='/' /> */}
      </div>
    </div>
  );
};

export default Navbar;
