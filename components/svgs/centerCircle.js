import React from "react";

function CenterCircle() {
  return (
    <>
      <svg
        width="934"
        height="934"
        viewBox="0 0 934 934"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_1014)">
          <circle
            cx="467"
            cy="467"
            r="414"
            fill="#7879F1"
            fillOpacity="0.26"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_1014"
            x="0"
            y="0"
            width="934"
            height="934"
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
              result="effect1_dropShadow_1_1014"
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
              result="effect1_dropShadow_1_1014"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1014"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default CenterCircle;
