import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"



const FlightSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <Path
        d="M17.67 8.83h-4.446a.571.571 0 01-.486-.269L8.31 1.476a.572.572 0 00-.484-.269h-.858a.572.572 0 00-.554.711l1.551 6.201a.572.572 0 01-.555.71H4.59a.572.572 0 01-.43-.194l-1.8-2.059c-.384-.436-1.097-.092-.993.479l.563 3.102a.572.572 0 010 .204l-.563 3.102c-.105.571.61.915.991.479l1.801-2.058a.572.572 0 01.431-.196h2.82a.57.57 0 01.555.71l-1.551 6.203a.572.572 0 00.554.71h.858a.571.571 0 00.484-.269l4.429-7.085a.571.571 0 01.485-.269h4.447a1.43 1.43 0 100-2.858v0z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.8}
      />
    </Svg>
  )
}

export default FlightSvg;