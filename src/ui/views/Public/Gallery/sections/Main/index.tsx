import Image1 from "./../../../../../../assets/Gallery/Image1.png";
import Image2 from "./../../../../../../assets/Gallery/Image2.png";
import Image3 from "./../../../../../../assets/Gallery/Image3.png";
import Image4 from "./../../../../../../assets/Gallery/Image4.png";
import ImageGallery from "react-image-gallery";

const Main = () => {
  const images = [
    {
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image2,
      thumbnail: Image2,
    },
    {
      original: Image3,
      thumbnail: Image3,
    },
    {
      original: Image4,
      thumbnail: Image4,
    },
  ];
  return (
    <section className="py-16 px-[10%]">
      <ImageGallery items={images} />
    </section>
  );
};

export default Main;
