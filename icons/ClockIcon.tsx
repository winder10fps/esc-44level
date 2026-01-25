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
const ClockIcon = (props: SvgProps) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Mask
            id="b"
            width={20}
            height={20}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <Path fill="url(#a)" d="M0 0h20v20H0z" />
        </Mask>
        <G mask="url(#b)">
            <Path fill="#fff" d="M0 0h20v20H0z" />
        </G>
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#c" transform="scale(.00781)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,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"
                id="c"
                width={128}
                height={128}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default ClockIcon
