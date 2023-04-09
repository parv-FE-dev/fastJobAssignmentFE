

function OuterCircle() {

  return (
    <>
      <svg
        width="1204"
        height="1024"
        viewBox="0 0 1204 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_1013)">
          <circle
            cx="691"
            cy="491"
            r="638"
            fill="#6768F1"
            fillOpacity="0.25"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_1013"
            x="0"
            y="-200"
            width="1382"
            height="1382"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="39"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_1_1013"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="46" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_1013"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1013"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default OuterCircle;
