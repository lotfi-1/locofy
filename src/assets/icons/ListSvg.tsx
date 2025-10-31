import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"



const ListSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M5.832 8.5h20.336M5.832 16h20.336M5.832 23.5h20.336"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default ListSvg;