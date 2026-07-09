/**
 * Ilustración de un perrito corriendo, dibujada en SVG puro (sin imágenes
 * externas). A diferencia de un emoji estático, aquí cada parte del cuerpo
 * se anima por separado para simular un trote real:
 *   - Las patas delantera y trasera giran en fases opuestas (dog-leg-front /
 *     dog-leg-back), como el movimiento diagonal de un trote.
 *   - El cuerpo entero rebota levemente en cada zancada (dog-bob).
 *   - La cola se menea y la oreja flota con el viento (dog-tail / dog-ear).
 *   - Una sombra en el piso se contrae y expande simulando el contacto con
 *     el suelo en cada paso (dog-shadow).
 * Los keyframes de cada animación están definidos en tailwind.config.ts.
 */
export const RunningDog = () => (
  <svg viewBox="0 0 120 70" className="h-9 w-14 md:h-10 md:w-16" aria-hidden="true">
    {/* Sombra de contacto con el suelo */}
    <ellipse
      cx="60"
      cy="63"
      rx="26"
      ry="4"
      fill="#000000"
      style={{ transformOrigin: '60px 63px' }}
      className="animate-dog-shadow"
    />

    <g className="animate-dog-bob">
      {/* Pata trasera */}
      <g className="animate-dog-leg-back">
        <line x1="0" y1="0" x2="0" y2="15" stroke="#B9743A" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Pata delantera */}
      <g className="animate-dog-leg-front">
        <line x1="0" y1="0" x2="0" y2="15" stroke="#B9743A" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Cuerpo */}
      <ellipse cx="58" cy="40" rx="28" ry="15" fill="#E0995B" stroke="#B9743A" strokeWidth="2" />

      {/* Cola */}
      <g className="animate-dog-tail">
        <path d="M0,0 Q-14,-4 -16,-14" fill="none" stroke="#B9743A" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Cabeza */}
      <circle cx="92" cy="30" r="13" fill="#E0995B" stroke="#B9743A" strokeWidth="2" />

      {/* Oreja */}
      <g className="animate-dog-ear">
        <path d="M0,0 Q6,-8 2,-16" fill="#B9743A" />
      </g>

      {/* Hocico y detalles de la cara */}
      <ellipse cx="103" cy="34" rx="6" ry="4.2" fill="#F2C08C" />
      <circle cx="108" cy="33" r="1.8" fill="#3A2A1A" />
      <circle cx="95" cy="26" r="1.6" fill="#2A1C10" />
    </g>
  </svg>
);