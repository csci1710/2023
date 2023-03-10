// import froggy from "../images/froggy.png";
import { PUB } from "../SITE_DATA";
import Announcement from "./Announcement";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollIntoView(id: string) {
  let yOffset = -150;
  console.log("called!");
  if (window.matchMedia("(max-width: 768px)").matches) {
    // On smaller devices, move the section bar up a little further
    yOffset = -60;
    // console.log("small screen!");
  }

  // -100 for sm/md
  const element = document.querySelector(id);
  if (element != null) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Navbar({ inView }: { inView: number | undefined }) {
  const sections = [
    { id: "#about", name: "About" },
    { id: "#assignments", name: "Assignments" },
    { id: "#lectures", name: "Lectures" },
    { id: "#resources", name: "Resources" },
    { id: "#calendar", name: "Calendar" },
    { id: "#staff", name: "Staff" },
  ];

  return (
    <>
      <nav className="bg-[#0B391B] text-neutral-50 flex items-center justify-left">
        <button
          onClick={scrollToTop}
          className="hidden md:flex items-center space-x-1 w-20 lg:w-32"
        >
          <img
            src={PUB + "/images/froggy.png"}
            alt="Home Button Froggy"
            className="h-20 2xl:w-32 2xl:h-32"
          />
        </button>
        <div className="text-neutral-400 text-sm  sm:text-lg font-title w-full flex justify-around items-center">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => {
                scrollIntoView(section.id);
              }}
              className={
                "transition-colors duration-200 " +
                (inView === index && "text-white underline")
              }
            >
              {section.name}
            </button>
          ))}
        </div>
        {/* {inView} */}
      </nav>
      <Announcement />
    </>
  );
}
