import lines from "@/public/backgroundlines.svg";

interface Props {
  numberOfSquares: number[];
  gridPosition: string;
}

const Square = ({ numberOfSquares, gridPosition }: Props) => {
  const coloredSquare = (index: number) => {
    if (index === 0) {
      return (
        <div className="w-full h-full bg-gradient-to-bl from-brand-square-green "></div>
      );
    } else if (index === 3) {
      return (
        <div className="w-full h-full bg-gradient-to-bl from-brand-square-purple "></div>
      );
    } else if (index === 6) {
      return (
        <div className="w-full h-full bg-gradient-to-bl from-brand-square-dark-pink "></div>
      );
    } else {
      return <div className="w-full h-ful bg-brand-dark-gray "></div>;
    }
  };

  return (
    //gridposition top is in hero section
    //gridposition bottom in in footer
    <div className="min-h-[500px]  w-full xl:w-[1200px] grid grid-cols-2 md:grid-cols-6 grid-rows-4 md:grid-rows-2 gap-0.5 bg-brand-stroke-dark-gray relative">
      {gridPosition === "top" &&
        numberOfSquares.map((item, index) => {
          return (
            <div
              className={
                index === 1 || index === 2 || index === 5 || index === 6
                  ? "w-full h-full  col-span-1 bg-black row-span-1 md:col-span-2"
                  : "w-full h-full bg-black"
              }
              key={index}
            >
              {coloredSquare(index)}
            </div>
          );
        })}
      {gridPosition === "bottom" &&
        numberOfSquares.map((item, index) => {
          return (
            <div
              className={
                index === 0 || index === 5
                  ? "w-full h-full  col-span-1 bg-black row-span-1 md:col-span-3"
                  : index === 1 || index === 4
                  ? "w-full h-full  col-span-1 bg-black row-span-1 md:col-span-2"
                  : "w-full h-full bg-black"
              }
              key={index}
            ></div>
          );
        })}
    </div>
  );
};

export default Square;
