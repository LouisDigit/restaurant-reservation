interface BannerProps {
  background: string;
}

const Banner = ({ background }: BannerProps) => {
  return (
    <section
      className="w-full h-[400px] bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    ></section>
  );
};

export default Banner;
