import Team1 from "./../../../../../../assets/AboutUs/Teams/Team1.png";
import Team2 from "./../../../../../../assets/AboutUs/Teams/Team2.png";
import Team3 from "./../../../../../../assets/AboutUs/Teams/Team3.png";
import Team4 from "./../../../../../../assets/AboutUs/Teams/Team4.png";

const Teams = () => {
  const teams = [
    {
      image: Team1,
      name: "Avroko",
      role: "Master Chef",
    },
    {
      image: Team2,
      name: "Evan Mattew",
      role: "Master Chef",
    },
    {
      image: Team3,
      name: "Diane	Clarkson",
      role: "Master Chef",
    },
    {
      image: Team4,
      name: "Dan Rafalin",
      role: "Assistant",
    },
  ];
  return (
    <section className="bg-infosBg py-24 px-[10%] gap-5 flex flex-col justify-center items-center">
      <h3 className="uppeercase border-t border-b border-primaryColor w-fit text-lg">
        Team
      </h3>
      <h2 className="font-serif text-2xl">Meet Our Professional Chefs</h2>
      <ul className="flex flex-col md:flex-row gap-10 md:gap-3">
        {teams.map((team, index) => {
          return (
            <li key={index} className="flex flex-col items-center gap-3">
              <img src={team.image} alt={team.name} />
              <h3 className="font-serif text-lg">{team.name}</h3>
              <p className="text-md font-light">{team.role}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Teams;
