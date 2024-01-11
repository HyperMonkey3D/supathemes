interface OpenState {
  open: boolean;
}

const Hamburger = ({ open }: OpenState) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="ham-menu">
        <g id="hamburger ">
          <line
            id="bottom"
            className={open ? "position-bottom" : ""}
            x1="24.0249"
            y1="77.0251"
            x2="76.0239"
            y2="77.3501"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {!open && (
            <line
              id="middle"
              x1="24.0249"
              y1="50.0251"
              x2="76.0239"
              y2="50.3501"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
            />
          )}
          <line
            id="upper"
            className={open ? "position-upper" : ""}
            x1="24.0249"
            y1="23.0251"
            x2="76.0239"
            y2="23.3501"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default Hamburger;
