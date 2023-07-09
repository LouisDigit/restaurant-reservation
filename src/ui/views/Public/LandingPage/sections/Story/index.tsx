import StoryImage from "./../../../../../../assets/LandingPage/StoryImage.png";

const Story = () => {
  return (
    <section className="px-[10%] flex pb-16 bg-infosBg">
      <img src={StoryImage} alt="story view" />

      <div className="border-l ml-16 border-opacity-50 border-darkBg flex flex-col gap-6 px-16">
        <h2 className="text-xl font-serif font-semibold">The Story</h2>
        <p>
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content gfshere',
          makinlook like readable English. Many desktop publishing packages.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-serif font-semibold">1996</h2>
            <p>Lorem Ipsum is that it has a more-or-less normal distribution</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-serif font-semibold">2021</h2>
            <p>
              Lorem Ipsum is that it has a more-or-less normal Content content
            </p>
          </div>
        </div>
        <h3 className="text-lg">Joséphine</h3>
      </div>
    </section>
  );
};

export default Story;
