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
const ComputerIcon = (props: SvgProps) => (
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
                <Use xlinkHref="#c" transform="scale(.02)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR4nO2ZPU7DQBBGH781OUCuQA8cJ2eBJAfwKeAI0CQ9QoI6aRzOkFQfcjSOXBg3+GfWzJNGsjVj7TyttcUOBEHwb7gGlsA3oMRiB8zNgYWDhv4aT5hV8XJHetxXduZklSoq+w8RJyhEnKEQcYZCxBkKEWcoRJyhEHGGQsQZChFnKEScoRBxhkYrosSD0Yl0xZVFV6gPkeKWfAtsOpRRXyKbvkR29lDcbKf2az1Y7zk2KFHi8Vhu/7yyMylFbhLHiVXbvNgis5rczHLPJMBXwwSsnDB94pwLYG/NTmryN5Y7AJc45rZ6ivxCbjVFrUumwJs1mTXUZVbzat+44Az4aOH0WQ8tcg68tyCyGlokCKjnByxr0tEfLd/RAAAAAElFTkSuQmCC"
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default ComputerIcon
