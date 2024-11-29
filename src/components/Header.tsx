import Image from "next/image";
import Menubar from "./Menubar";

const Header = () => {
  return (
    <main className="flex-none h-auto max-w-[1300px] relative w-[100%] m-auto py-4">
      <section className="flex justify-between">
        <h1 className="text-black text-[22px] font-bold">Mayur</h1>
        <Menubar />
        <div className="bg-black p-2 rounded-full">
          <Image
            src={
              "https://framerusercontent.com/images/y7AJDvszhzacJVCt3lE8xkNyDY.svg"
            }
            alt="contact"
            width={20}
            height={20}
          />
        </div>
      </section>
    </main>
  );
};

export default Header;
