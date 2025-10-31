import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"



const WalletSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M15.823 8.814a.637.637 0 01.637-.637h2.55a.637.637 0 01.636.637v1.274a.637.637 0 01-.637.638H16.46a.637.637 0 01-.637-.638V8.814z"
      />
      <Path
        d="M4.353 4.353a2.549 2.549 0 00-2.548 2.55v10.195a2.549 2.549 0 002.548 2.549h15.293a2.549 2.549 0 002.55-2.55V6.903a2.549 2.549 0 00-2.55-2.549H4.354zm16.568 2.55v6.371H3.079V6.902a1.274 1.274 0 011.274-1.274h15.293a1.275 1.275 0 011.275 1.274zm-1.274 11.47H4.352a1.274 1.274 0 01-1.274-1.275v-1.275h17.842v1.275a1.274 1.274 0 01-1.274 1.274z"
      />
    </Svg>
  )
}

export default WalletSvg;