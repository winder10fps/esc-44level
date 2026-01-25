import * as React from "react"
import Svg, {
    SvgProps,
    Mask,
    Path,
    G,
    Defs,
    Pattern,
    Use,
    Image,
} from "react-native-svg"
const VRIcon = (props: SvgProps) => (
    <Svg
        width={28}
        height={28}
        fill="none"
        {...props}
    >
        <Mask
            id="b"
            width={28}
            height={28}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <Path fill="url(#a)" d="M0 0h28v28H0z" />
        </Mask>
        <G mask="url(#b)">
            <Path fill="#fff" d="M0 0h28v28H0z" />
        </G>
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#c" transform="scale(.01042)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,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"
                id="c"
                width={96}
                height={96}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default VRIcon
