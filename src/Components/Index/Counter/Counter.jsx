import { useCountUp } from "react-countup";

import counter1 from "/assets/Index/Counter/count-icon1.png";
import counter2 from "/assets/Index/Counter/count-icon2.png";
import counter3 from "/assets/Index/Counter/count-icon3.png";
import counter4 from "/assets/Index/Counter/count-icon4.png";
import { useRef } from "react";

const counters = [
  {
    id: 1,
    title: "Voyages organisés",
    value: 3600,
    suffix: "+",
    image: counter1,
    decimals: 0,
  },
  {
    id: 2,
    title: "Voyageurs satisfaits",
    value: 7634,
    suffix: "+",
    image: counter2,
    decimals: 0,
  },
  {
    id: 3,
    title: "Aventures réalisées",
    value: 2.5,
    suffix: "K",
    image: counter3,
    decimals: 1,
  },
  {
    id: 4,
    title: "Années d'expérience",
    value: 25,
    suffix: "+",
    image: counter4,
    decimals: 0,
  },
];
function Counter() {

  const CounterNumber = ({ value }) => {
    const ref = useRef(null);

    useCountUp({
      ref,
      end: value,
      duration: 2.5,
    });

    return <span ref={ref} />;
  };

  return (
    <>
      <div className="counter-wrap bg-secondary px-[2%] sm:px-[8%] lg:px-[12%] py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
        {counters.map((item) => (
          <div
            key={item.id}
            className="counter-item flex items-center border border-dashed border-gray-50/20 rounded-lg px-5 py-8 gap-8"
          >
            <img
              src={item.image}
              alt={`Icône représentant ${item.title.toLowerCase()}`}
              className="w-14 h-14"
            /> 
            <div className="counter-content">
              <h4 className="text-white text-2xl font-medium">{item.title}</h4>
              <span className="text-yellow text-5xl font-bold font-afacad xl:text-4xl">
              <CounterNumber value={item.value} />
                {item.suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Counter;
