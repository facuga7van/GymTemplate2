import Link from "next/link";
import type { Metadata } from "next";
import Carousel from "../components/Carousel";
export const metadata: Metadata = {
  title: "Gimnasio - Crossfit",
  description:
    "Tratamientos de Adicciones ofrece un tratamiento con laser para personas que luchan con adicciones, para dejar de fumar y de consumir todo tipo de sustancias.",
};
const Crossfit = () => {
  return (
    <>
      <div className="mb-10">
        <div
          className="relative shadow-md"
          style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2))" }}
        >
          <img
            src="carousel1.jpg"
            alt="Imagen de Tabaquismo"
            className="max-h-[30rem] w-full object-cover"
          />
        </div>
        <div className="hidden md:block text-center text-white">
          <h1 className="font-serif md:text-[3rem] text-3xl font-bold mt-10">
            Lorem ipsum
          </h1>
        </div>
        <div className="md:grid grid-cols-2 md:mx-[10rem] gap-11 my-5">
          <div className="my-auto">
            <Carousel />
          </div>

          <div className="md:flex justify-center items-center md:mx-auto md:mt-12 mx-[2rem]">
          <div className="md:hidden text-center text-white">
          <h1 className="font-serif md:text-[3rem] text-3xl font-bold mt-10">
            Lorem ipsum
          </h1>
        </div>
            <div className=" m-3 text-white">
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
                feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
                bibendum lorem non ligula aliquet porttitor. Quisque eget
                blandit augue, eget iaculis arcu. Aliquam imperdiet hendrerit
                lorem, in pharetra enim vestibulum quis. Maecenas ornare
                vulputate nisl, ut sagittis felis iaculis vel. Fusce nec diam
                sit amet
              </p>
              <div className="font-serif text-3xl font-bold my-5">
                Lorem ipsum
              </div>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
                feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
                bibendum lorem non ligula aliquet porttitor. Quisque eget
                blandit augue, eget iaculis arcu. Aliquam imperdiet hendrerit
                lorem, in pharetra enim vestibulum quis. Maecenas ornare
                vulputate nisl, ut sagittis felis iaculis vel. Fusce nec diam
                sit amet
              </p>
              <Link
                href="/contact"
                className="flex bg-[#812320] md:bg-transparent text-white min-w-[10rem] px-3 justify-center mt-10 mx-[10rem] border-2 border-[#812320] rounded-lg borderad shadow-btn hover:bg-[#812320] hover:scale-110  all duration-300 ease-in-out"
                style={{
                  filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2))",
                }}
              >
                <span className="text-xl p-3">Contactanos</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crossfit;
