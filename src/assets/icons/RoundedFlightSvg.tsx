

import Svg, { Circle, Ellipse, Path, SvgProps } from "react-native-svg"

const RoundedFlightSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"
      {...props}
    >
      <Circle
        cx={20.5}
        cy={20.5}
        r={20.5}
        transform="rotate(-90 20.5 20.5)"
        fill="#ECF2F9"
      />
      <Ellipse
        cx={20.5}
        cy={20.5}
        rx={16.5307}
        ry={16.5307}
        transform="rotate(-90 20.5 20.5)"
        fill="#D6E4F2"
      />
      <Circle
        cx={20.5}
        cy={20.5}
        r={11.6415}
        transform="rotate(-90 20.5 20.5)"
        fill="#1262AE"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.338 15.741a.528.528 0 01.943-.445l2.883 4.176 2.922.139a.889.889 0 01-.042 1.776h-2.88l-2.883 4.31a.53.53 0 01-.95-.435l1.074-3.875h-2.896l-.772 1.583a.353.353 0 01-.67-.154v-4.85a.319.319 0 01.604-.144l.838 1.65h2.896l-1.067-3.73z"
        fill="#fff"
      />
    </Svg>
  )
}

export default RoundedFlightSvg;