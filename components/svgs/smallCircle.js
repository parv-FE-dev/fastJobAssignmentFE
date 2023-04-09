import React from "react";

function SmallCircle() {
  return (
    <>
      <svg
        width="524"
        height="524"
        viewBox="0 0 524 524"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_1015)">
          <circle
            cx="262"
            cy="262"
            r="209"
            fill="#A5A6F6"
            fillOpacity="0.26"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_1015"
            x="0"
            y="0"
            width="524"
            height="524"
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
              result="effect1_dropShadow_1_1015"
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
              result="effect1_dropShadow_1_1015"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1015"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default SmallCircle;
