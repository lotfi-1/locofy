import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"



const ArrowLeftSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M5.086 12h15.252M9.583 6.074l-5.921 5.921 5.92 5.92"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default ArrowLeftSvg;