import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"



const EditSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M18.545 1.85a3.604 3.604 0 012.548 6.153L9.009 20.088c-.4.4-.9.685-1.448.825l-4.745 1.213a.776.776 0 01-.942-.943l1.214-4.743c.14-.547.425-1.047.825-1.447L15.997 2.906a3.605 3.605 0 012.548-1.055zM5.009 16.09a1.602 1.602 0 00-.42.735L3.7 20.3l3.477-.888c.278-.071.533-.216.736-.42L17.903 9 15 6.097l-9.991 9.992zM18.545 3.4c-.545 0-1.067.217-1.452.602l-.997.996L19 7.903l.997-.997a2.053 2.053 0 00-1.452-3.505z"
        strokeWidth={0.3}
      />
    </Svg>
  )
}

export default EditSvg;
