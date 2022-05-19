import { Box } from "theme-ui";
import { useTheme } from "../../../utils/theme";
import { activeStyle, getSizeStyle, sizeMap } from "./Ball.styles";
import type { BallProps } from "./Ball.types";

export default function Ball({
  size,
  disabled,
  onClick,
}: BallProps): JSX.Element {
  const { theme } = useTheme();

  const stateType = disabled ? "disabled" : "active";
  const onClickFunc = disabled ? undefined : onClick;

  return (
    <Box
      role="button"
      sx={{
        ...getSizeStyle(size),
        ...(!disabled && activeStyle),
      }}
      onClick={onClickFunc}
    >
      <svg
        width={sizeMap[size]}
        height={sizeMap[size]}
        version="1.1"
        viewBox="0 0 26.458 26.458"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: theme.shadows.svgFilter.sm,
        }}
      >
        <g
          transform="translate(-91.771 -141.89)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m105 141.89a13.229 13.229 0 0 0-13.229 13.229h26.458a13.229 13.229 0 0 0-13.229-13.229z"
            fill={theme.colors.ball[stateType].top}
            stopColor="#000000"
            strokeWidth=".7"
          />
          <path
            d="m105 168.34a13.229 13.229 0 0 0 13.229-13.229h-26.458a13.229 13.229 0 0 0 13.229 13.229z"
            fill={theme.colors.ball[stateType].bottom}
            stopColor="#000000"
            strokeWidth=".7"
          />
          <g fill={theme.colors.ball[stateType].middle}>
            <rect
              x="91.771"
              y="153.26"
              width="26.458"
              height="1.8521"
              stopColor="#000000"
              strokeWidth=".7"
            />
            <rect
              x="91.771"
              y="155.11"
              width="26.458"
              height="1.8521"
              stopColor="#000000"
              strokeWidth=".7"
            />
            <circle
              cx="105"
              cy="155.11"
              r="4.6302"
              stopColor="#000000"
              strokeWidth=".7"
            />
          </g>
          <circle
            cx="105"
            cy="155.11"
            r="2.6458"
            fill={theme.colors.ball[stateType].bottom}
            stopColor="#000000"
            strokeWidth=".7"
          />
          <path
            transform="matrix(.26458 0 0 .26458 91.771 141.89)"
            d="m50 0a50 50 0 0 0-50 50 50 50 0 0 0 20.811 40.557 50 50 0 0 1-11.561-31.932 50 50 0 0 1 50-50 50 50 0 0 1 29.203 9.418 50 50 0 0 0-38.453-18.043z"
            fillOpacity=".25"
            stopColor="#000000"
            strokeWidth="2.6457"
          />
        </g>
      </svg>
    </Box>
  );
}
