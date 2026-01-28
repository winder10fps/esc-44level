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
const PencilIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Mask
            id="b"
            width={24}
            height={24}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <Path fill="url(#a)" d="M0 0h24v24H0z" />
        </Mask>
        <G mask="url(#b)">
            <Path fill="#fff" d="M0 0h24v24H0z" />
        </G>
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#c" transform="scale(.01)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,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"
                id="c"
                width={100}
                height={100}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default PencilIcon
