import React from "react";
import sale from "../../img/sale.png";
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero ml-[450px] mt-[100px]">
          <div class="words word-1">
            <span>М</span>
            <span>А</span>
            <span>Р</span>
            <span>К</span>
            <span>Е</span>
            <span>Т</span>
          </div>

          <div class="words word-2">
            <span>В</span>
            <span>A</span>
            <span>Ш</span>
            <span>Е</span>
            <span>Й</span>
          </div>

          <div class="words word-3">
            <span>М</span>
            <span>E</span>
            <span>Ч</span>
            <span>Т</span>
            <span>Ы</span>
            {/* <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span> */}
          </div>
          {/* <figure class="relative text-center flex items-center content-center  max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg  text-white bottom-6">
              <p> Закажите что нибудь</p>
            </figcaption>
          </figure> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
