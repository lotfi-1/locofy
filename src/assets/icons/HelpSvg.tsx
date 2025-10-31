import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"



const HelpSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <Path
        d="M11 1.634a9.366 9.366 0 100 18.732 9.366 9.366 0 000-18.732z"
        stroke="#1262AE"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M8.02 8.142s.045-.931 1.041-1.733c.592-.477 1.3-.614 1.939-.624.582-.007 1.101.089 1.412.237.532.253 1.568.872 1.568 2.186 0 1.384-.905 2.012-1.935 2.704-1.031.69-1.311 1.441-1.311 2.216"
        stroke="#1262AE"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M10.68 16.96a1.064 1.064 0 100-2.129 1.064 1.064 0 000 2.129z"
        fill="#1262AE"
      />
    </Svg>
  )
}

export default HelpSvg;