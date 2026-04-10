import bannerImg from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="border-t border-[#F2F2F2]">
      <div className="flex gap-15 py-15 items-center justify-between max-w-[80%] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1 py-2 px-4 w-fit rounded-full bg-[#E1E7FF]">
            <div className="flex items-center justify-center w-4 h-4 bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 rounded-full relative">
              <div className="flex items-center justify-center w-3 h-3 rounded-full bg-linear-to-r from-[#4F39F6]/40 to-[#9514FA]/40 absolute z-2">
                <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"></div>
              </div>
            </div>
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New:AI-Powered Tools Available
            </span>
          </div>
          <h1 className="font-extrabold text-7xl text-[#101727]/90">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-lg text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today.
          </p>
          <div className="flex mt-8 gap-4">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[100px] py-3 px-4 text-white hover:shadow-sm hover:shadow-fuchsia-900 hover:-translate-0.5">
              Explore Products
            </button>
            <button className="btn p-[1.5px] rounded-[100px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none hover:shadow-sm hover:shadow-fuchsia-900 hover:-translate-0.5">
              <span className="flex items-center gap-2 px-4 py-2 rounded-[100px] bg-base-100 ">
                <IoPlayOutline className="text-[#6D28D9] font-medium" />
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
                  Watch Demo
                </span>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
