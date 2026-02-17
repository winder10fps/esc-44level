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
const ChampionCupIcon = (props: SvgProps) => (
    <Svg
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <Mask
            id="b"
            width={42}
            height={42}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <Path fill="url(#a)" d="M0 0h42v42H0z" />
        </Mask>
        <G mask="url(#b)">
            <Path fill="url(#c)" d="M0 0h42v42H0z" />
            <Path fill="red" d="M0 0h42v42H0z" />
        </G>
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#d" transform="scale(.01)" />
            </Pattern>
            <Pattern
                id="c"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#d" transform="scale(.01)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,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"
                id="d"
                width={100}
                height={100}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default ChampionCupIcon
