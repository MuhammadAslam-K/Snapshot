import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/an3.jpg" },
  { url: "images/an4.jpg" },
  { url: "images/an5.jpg" },
  { url: "images/an9.jpg" },
];

const Banner = () => {
  return (
      <div>
        <SimpleImageSlider
          width={1520}
          height={690}
          images={images}

          autoPlay={1}
        />
      </div>

  );
}


export default Banner