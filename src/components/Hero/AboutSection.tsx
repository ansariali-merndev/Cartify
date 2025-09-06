import { about } from "@/lib/data";

export const AboutSection = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 my-18">
      {about.map((item, idx) => (
        <li key={idx} className="flex flex-col justify-center items-center">
          <img src={item.img} alt="Images" />
          <h2>{item.title}</h2>
          <p>{item.para}</p>
        </li>
      ))}
    </ul>
  );
};
