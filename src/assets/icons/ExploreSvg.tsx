

import Svg, { G, Mask, Path, SvgProps } from "react-native-svg"

const ExploreSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
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
          x={0}
          y={0}
          width={20}
          height={20}
        >
          <Path
            d="M17.354 4.477H2.646C1.187 4.477 0 5.69 0 7.182v9.394c0 1.491 1.187 2.705 2.646 2.705h14.708c1.459 0 2.646-1.214 2.646-2.705V7.182c0-1.492-1.187-2.705-2.646-2.705zm1.03 12.099c0 .58-.462 1.053-1.03 1.053H2.646c-.568 0-1.03-.472-1.03-1.053V7.182c0-.581.462-1.054 1.03-1.054h14.708c.568 0 1.03.473 1.03 1.054v9.394zM11.838.719H8.162c-1.46 0-2.647 1.214-2.647 2.705v15.03c0 .457.362.826.808.826.446 0 .808-.37.808-.825V3.424c0-.58.462-1.053 1.03-1.053h3.677c.569 0 1.03.472 1.03 1.053v15.03c0 .457.363.826.809.826.446 0 .808-.37.808-.825V3.424c0-1.491-1.187-2.705-2.647-2.705z"
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
            y={-1}
            width={20}
            height={22}
          >
            <Path d="M20-.124H0v20.248h20V-.124z" />
          </Mask>
          <G mask="url(#b)">
            <Path d="M20-.124H0v20.248h20V-.124z"  />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default ExploreSvg;