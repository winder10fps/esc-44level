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
const CarIcon = (props: SvgProps) => (
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZklEQVR4nO2Yv2sUQRTHP0G9i0VyKgHjYacodoKIIZLCQhEbE9EUdmrjr2AlCFqkCWkkjV1SiNip8R/Qwsaf4K/icqaJohF/FBaijSaePPiuLGd23Vl2cTfMBx7H3M7Me2/fzHszCx6Px+PxeDxp2QQcYBlwB2gBRyk5x+XIF2AjJWdazlh0OigQu4AG8BUYTdB/PfBZzpyhQDRkVCB7EowZUt/vwBYKwi8ZNarfWwnHXVP/R8BKCkBLYkvmB/ATqCcYVwPeaOwlCuSIcdPRsAFgUc7vJCdWAzuAY8CEssyntv2Qpdh+eQ7cBi4Dp4H9wFag6mL4WmAEuAG8AhZyNNpVFoG3wD3gKnBRSeWv9G1h/dA22Nb7S+A6cB7Yq32QF/YibQUMAxeASeAu8DrmpT4FNgcT1FUD7MF94ASwHahQHFbJ4H3ASeAK8F42vwN6rNOU/rCKu4LyUAMeyHbbw3xUYxvlo0+2z4ULWpmiEVCR7QvtdaCMtAL7oxzpBM4BT5TjTR4rRTvldUc6HfXGOmKZ7EVMXrfCtSEHJ+op9EY6Ug1NZifbg0CXZBBo6tmzjFN0Wr2RjoyoPaMU104tNKkdI7Iird4/9geFpV8Pgtxsb+Rf9wkroFmRRu9uteetMR6xHi2kUXTneK7qSqF3DK238VBkkkxYK4gj83KiEhdi22BRHMpxaQ3G9DnsovesOjcjNt0aYFZ9TqW321nvOh3lE+utKF+3dC8ZUki7FYnZ0BE6y/Qbp/dIyAknvfXQpEuJ5fLeDJ3IVW9V4bavHN8kD/UtKs+7SvU/6fV4PB6Px+MhY34DEhZWcR4mEvkAAAAASUVORK5CYII="
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default CarIcon
