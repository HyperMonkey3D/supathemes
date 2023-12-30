const Spheres = () => {
  return (
    <>
      <svg
        width="115"
        height="116"
        viewBox="0 0 115 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-3 right-10"
      >
        <g id="top">
          <g id="sphere-top">
            <circle
              id="spheres-ring-two"
              cx="58"
              cy="58"
              r="29.5"
              stroke="#9A01F9"
            />
            <circle
              id="spheres-ring-one"
              cx="58"
              cy="58"
              r="19"
              stroke="#F9578F"
              strokeWidth="2"
            />
            <circle
              id="spheres-center"
              cx="58"
              cy="58"
              r="9"
              fill="#3FBAFF"
              stroke="#3FBAFF"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
      <svg
        width="115"
        height="116"
        viewBox="0 0 115 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-3 -right-3 "
      >
        <g id="top">
          <g id="sphere-sattelite-right">
            <circle
              id="spheres-center-2"
              cx="58"
              cy="58"
              r="9"
              fill="#3FBAFF"
              stroke="none"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default Spheres;
