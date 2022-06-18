import { Box } from "theme-ui";
import { useTheme } from "../../../utils/theme";
import { keyframes } from "@emotion/react";

interface StarProps {
  size: number | string;
  visible: boolean;
}

const showAnimation = keyframes({
  from: {
    opacity: 0,
    transform: "rotate(-90deg) scale(0.5)",
  },
  to: {
    opacity: 1,
    transform: "rotate(0deg) scale(1)",
  },
});

const loopAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const starShapeRatio = 25.163 / 26.458; // Based on Inkscape shape

export default function Star({ size, visible }: StarProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <Box
      title="star"
      sx={{
        width: size,
        willChange: "transform",
        shapeRendering: "crispEdges",

        ...(!visible && {
          transform: "scale(0)",
        }),
      }}
    >
      <Box
        sx={{
          willChange: "transform",
          shapeRendering: "crispEdges",
          ...(visible && {
            animation: `${showAnimation} 1s linear, ${loopAnimation} 10s linear 1s infinite`,
          }),
        }}
      >
        <svg
          width="100%"
          height={`${100 * starShapeRatio}%`}
          version="1.1"
          viewBox="0 0 26.458 25.163"
          xmlns="http://www.w3.org/2000/svg"
          style={{ willChange: "transform", shapeRendering: "crispEdges" }}
        >
          <path
            transform="matrix(-.27823 0 0 -.27823 1.4781 23.544)"
            d="m-42.235 84.622-11.167-34.625-36.381 0.07952 29.48-21.32-11.318-34.576 29.386 21.449 29.386-21.449-11.318 34.576 29.48 21.32-36.381-0.079517z"
            fill={theme.colors.star}
            stopColor="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5159"
          />
        </svg>
      </Box>
    </Box>
  );
}
