import { Download } from "lucide-react";
import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";

const Footer = () => {
  return (
    <main className="flex-none h-auto max-w-[1300px] relative w-[100%] m-auto py-4">
      <div className="grid grid-cols-1 lg:grid-cols-1  md:grid-cols-2 gap-10">
        <section className="flex justify-between">
          <Menubar />
          <SocialsMenu />
        </section>

        <section className="flex justify-between items-start">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              Interested in working together?
            </h1>
            <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold">
                Get In Touch
              </button>
              <button className="px-6 py-2 bg-transparent transition-all duration-300 border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white flex gap-2 font-bold">
                <Download /> Download CV
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            ©2023 All Rights Reserved.
            <br />
            Made with 💜 by Mayur Nakum
          </p>
        </section>
      </div>
    </main>
  );
};

export default Footer;
