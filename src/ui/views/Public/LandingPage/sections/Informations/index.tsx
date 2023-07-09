import MarkerIcon from "./../../../../../../assets/LandingPage/Icon/MarkerIcon.svg";
import TimeIcon from "./../../../../../../assets/LandingPage/Icon/TimeIcon.svg";
import ReservationIcon from "./../../../../../../assets/LandingPage/Icon/ReservationIcon.svg";

const Informations = () => {
  const infos = [
    {
      image: MarkerIcon,
      title: "Locate Us",
      description: "Riverside 25, San Francisco, California",
    },
    {
      image: TimeIcon,
      title: "Open Hours",
      description: "Mon To Fri 9:00 AM - 9:00 PM",
    },
    {
      image: ReservationIcon,
      title: "Reservation",
      description: "hirestaurantate@gmail.com",
    },
  ];
  return (
    <section className="px-[10%] py-24 bg-infosBg">
      <ul className="flex items-center justify-between">
        {infos.map((info, index) => {
          return (
            <li className="flex gap-3" key={index}>
              <img
                src={info.image}
                alt={info.title}
                className="rounded-full bg-darkBg p-2 w-16 shadow-2xl"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-serif font-semibold">
                  {info.title}
                </h2>
                <p>{info.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Informations;
