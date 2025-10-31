import * as React from "react"
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"



const LocationSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <G opacity={0.8}>
        <Mask
          id="a"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={1}
          y={0}
          width={18}
          height={20}
        >
          <Path
            d="M15.893 2.44A8.281 8.281 0 0010 0a8.281 8.281 0 00-5.893 2.44 8.272 8.272 0 00-2.44 5.889c0 1.47.428 3.002 1.274 4.552.658 1.205 1.57 2.426 2.71 3.629 1.921 2.027 3.82 3.301 3.9 3.354a.807.807 0 00.897 0c.08-.053 1.98-1.327 3.901-3.354 1.14-1.203 2.052-2.424 2.71-3.63.845-1.549 1.274-3.08 1.274-4.551a8.272 8.272 0 00-2.44-5.89zM10 1.615c3.704 0 6.717 3.011 6.717 6.713 0 4.552-5.147 8.709-6.717 9.87-1.57-1.162-6.717-5.319-6.717-9.87 0-3.702 3.013-6.713 6.717-6.713zm0 3.398a3.32 3.32 0 00-3.317 3.315A3.32 3.32 0 0010 11.644a3.32 3.32 0 003.317-3.315A3.32 3.32 0 0010 5.014zm0 1.616c.937 0 1.7.762 1.7 1.699s-.763 1.699-1.7 1.699c-.937 0-1.7-.762-1.7-1.7 0-.936.763-1.698 1.7-1.698z"
          />
        </Mask>
        <G mask="url(#a)">
          <Mask
            id="b"
            style={{
              maskType: "alpha"
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={20}
            height={20}
          >
            <Path d="M20 0H0v20h20V0z" />
          </Mask>
          <G mask="url(#b)">
            <Path d="M20 0H0v20h20V0z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default LocationSvg;