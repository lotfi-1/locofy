import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"



const UserAskingSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <Path
        d="M11 13.632H7.43c-3.115 0-5.64 2.21-5.64 4.934v1.645m18.422-15.79V11a2.631 2.631 0 01-2.632 2.632h-2.631v6.58M13.632 5.736a3.947 3.947 0 11-7.895 0 3.947 3.947 0 017.895 0v0z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default UserAskingSvg;