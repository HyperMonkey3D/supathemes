const Corner = () => {
  return (
    <svg
      width="90"
      height="75"
      viewBox="0 0 90 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-5 right-5 "
    >
      <g id="corner">
        <path
          id="background"
          d="M1 3H72C80.2843 3 87 9.71573 87 18V74H1V3Z"
          fill="url(#paint0_linear_139_3)"
        />
        <path
          id="corner-line"
          d="M1 1.5H64C81 1.5 88.5 11.5 88.5 24C88.5 36.5 88.5 59.5 88.5 74"
          stroke="url(#paint1_linear_139_3)"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_139_3"
          x1="87"
          y1="3"
          x2="37"
          y2="58.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.442708" stopColor="#141414" />
          <stop offset="1" stopColor="#1E1E1E" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_139_3"
          x1="38.5"
          y1="-16"
          x2="101"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3FB2" stopOpacity="0.03" />
          <stop offset="0.322917" stopColor="#FD8888" stopOpacity="0.562212" />
          <stop offset="0.588542" stopColor="#FB1262" />
          <stop offset="0.807292" stopColor="#FD88B1" />
          <stop offset="1" stopColor="#FF3FEC" stopOpacity="0.03" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Corner;
