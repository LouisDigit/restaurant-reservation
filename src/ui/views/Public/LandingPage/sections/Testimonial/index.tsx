import TestimonialPicture1 from "./../../../../../../assets/LandingPage/Testimonial/User/Testimonial1.png";
import TestimonialPicture2 from "./../../../../../../assets/LandingPage/Testimonial/User/Testimonial2.png";
import TestimonialPicture3 from "./../../../../../../assets/LandingPage/Testimonial/User/Testimonial3.png";
import TestimonialImage from "./../../../../../../assets/LandingPage/Testimonial/TestimonialImage.png";

const Testimonial = () => {
  const testimonials = [
    {
      photo: TestimonialPicture1,
      name: "Daniyal Sppra",
      localisation: "Newyork",
      commentary:
        "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
    },
    {
      photo: TestimonialPicture2,
      name: "Natasha D",
      localisation: "Salt Lake City",
      commentary:
        "It is professional, considers everyone's time, can think about the  There are many variations of passages.",
    },
    {
      photo: TestimonialPicture3,
      name: "Jack Sparrow",
      localisation: "San Diego",
      commentary:
        "It is professional, considers everyone's time, can think about the  There are many  passages whole probls small niche, friendly.",
    },
  ];
  return (
    <section className="bg-darkBg flex flex-col px-0 md:px-[10%] py-16 text-fontColor">
      <div className="flex flex-col gap-3 mb-8 px-6 md:px-0">
        <h3 className="uppeercase border-t border-b border-primaryColor w-fit text-fontColor">
          Testimonial
        </h3>
        <h2 className="text-xl font-serif font-semibold">
          What our clients say
        </h2>
        <p className="text-md">
          We love to hear from customers, so please leave a comment or say hello
          in an email.
        </p>
      </div>
      <ul className="flex flex-col md:flex-row justify-between items-center  md:px-0 gap-5">
        {testimonials.map((testimonial, index) => {
          return (
            <li
              className="bg-lightDarkBg gap-3 p-5 h-80 md:h-60 w-full md:w-96"
              key={index}
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-28 h-28"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="pb-4 border-b-fontColor border-opacity-50">
                    {testimonial.name}
                  </h3>
                  <p className="italic font-serif">{testimonial.commentary}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <img src={TestimonialImage} alt="testimonial view" className="mt-16" />
    </section>
  );
};

export default Testimonial;
