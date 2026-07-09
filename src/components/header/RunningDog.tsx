export const RunningDog = () => (
  <svg
    viewBox="0 0 140 90"
    className="w-16 h-10 md:w-20 md:h-12"
    aria-hidden="true"
  >
    {/* Sombra */}
    <ellipse
      cx="70"
      cy="75"
      rx="28"
      ry="5"
      fill="#000"
      opacity="0.15"
      className="animate-dog-shadow"
      style={{
        transformBox: "fill-box",
        transformOrigin: "center",
      }}
    />

    {/* Cola */}
    <g
      className="animate-dog-tail"
      style={{
        transformBox: "fill-box",
        transformOrigin: "100% 50%",
      }}
    >
      <path
        d="M42 34 Q28 28 22 14"
        fill="none"
        stroke="#B9743A"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>

    {/* Cuerpo */}
    <g
      className="animate-dog-bob"
      style={{
        transformBox: "fill-box",
        transformOrigin: "center",
      }}
    >
      <ellipse
        cx="70"
        cy="42"
        rx="32"
        ry="18"
        fill="#E0995B"
        stroke="#B9743A"
        strokeWidth="2"
      />

      {/* Cabeza */}
      <circle
        cx="103"
        cy="33"
        r="14"
        fill="#E0995B"
        stroke="#B9743A"
        strokeWidth="2"
      />

      {/* Hocico */}
      <ellipse
        cx="114"
        cy="37"
        rx="7"
        ry="5"
        fill="#F4C79C"
      />

      {/* Ojo */}
      <circle cx="101" cy="30" r="1.8" fill="#222" />

      {/* Nariz */}
      <circle cx="119" cy="36" r="2" fill="#222" />

      {/* Oreja */}
      <g
        className="animate-dog-ear"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        <path
          d="M97 18 L105 7 L108 24 Z"
          fill="#8B5A2B"
        />
      </g>
    </g>

    {/* Pata delantera */}
    <g
      className="animate-dog-leg-front"
      style={{
        transformBox: "fill-box",
        transformOrigin: "50% 0%",
      }}
    >
      <line
        x1="90"
        y1="52"
        x2="90"
        y2="72"
        stroke="#8B5A2B"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>

    {/* Segunda pata delantera */}
    <g
      className="animate-dog-leg-back"
      style={{
        transformBox: "fill-box",
        transformOrigin: "50% 0%",
      }}
    >
      <line
        x1="80"
        y1="52"
        x2="80"
        y2="72"
        stroke="#8B5A2B"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>

    {/* Pata trasera */}
    <g
      className="animate-dog-leg-back"
      style={{
        transformBox: "fill-box",
        transformOrigin: "50% 0%",
      }}
    >
      <line
        x1="55"
        y1="52"
        x2="55"
        y2="72"
        stroke="#8B5A2B"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>

    {/* Segunda pata trasera */}
    <g
      className="animate-dog-leg-front"
      style={{
        transformBox: "fill-box",
        transformOrigin: "50% 0%",
      }}
    >
      <line
        x1="45"
        y1="52"
        x2="45"
        y2="72"
        stroke="#8B5A2B"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);