import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"



const LogoutSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M19 12l-4-4m4 4l-4 4m4-4H9m5 9a9 9 0 010-18"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LogoutSvg;