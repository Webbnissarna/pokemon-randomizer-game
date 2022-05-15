import { useTheme } from "../../../utils/theme";

interface SimpleBallProps {
  size: string | number;
}

export default function SimpleBall({ size }: SimpleBallProps): JSX.Element {
  const { theme } = useTheme();
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: theme.shadows.svgFilter.md,
      }}
    >
      <g
        transform="translate(-4.612 -47.502)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".7"
      >
        <path
          d="m104.61 47.502a100 100 0 0 0-100 100h200a100 100 0 0 0-100-100z"
          fill={theme.colors.ball.active.top}
          stopColor="#000000"
        />
        <path
          d="m104.61 247.5a100 100 0 0 0 100-100h-200a100 100 0 0 0 100 100z"
          fill={theme.colors.ball.active.bottom}
          stopColor="#000000"
        />
      </g>
    </svg>
  );
}
