interface Hovered {
  hovered: boolean;
}

const Corner = ({ hovered }: Hovered) => {
  return (
    <svg
      width="350"
      height="350"
      viewBox="0 0 357 309"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        hovered
          ? "w-[350px] absolute top-3 right-20 transition ease-in-out  scale-125 duration-300"
          : "w-[350px] absolute top-3 right-20 transition ease-in-out  duration-300"
      }
    >
      <g id="circle-glow" clipPath="url(#clip0_156_15)">
        <g id="Group">
          <ellipse
            id="Ellipse-outer"
            cx="188.591"
            cy="146.364"
            rx="242.267"
            ry="223.389"
            transform="rotate(24.7808 188.591 146.364)"
            fill="url(#paint0_radial_156_15)"
            className={hovered ? "glow" : "hidden"}
          />
          <circle
            id="Ellipse-inner"
            cx="189.017"
            cy="185.94"
            r="115.72"
            fill="url(#paint1_linear_156_15)"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_156_15"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(207.614 137.599) rotate(157.139) scale(145.618 137.457)"
        >
          <stop stopColor="#930350" />
          <stop offset="0.583095" stopColor="#DC097B" stopOpacity="0.572917" />
          <stop offset="1" stopColor="#D50073" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_156_15"
          x1="228.993"
          y1="7.80071"
          x2="105.909"
          y2="280.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.153218" stopColor="#E3027C" />
          <stop offset="0.713488" stopColor="#E3027C" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_156_15">
          <rect width="357" height="309" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Corner;
