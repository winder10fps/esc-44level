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
const VKIcon = (props: SvgProps) => (
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
                <Use xlinkHref="#c" transform="scale(.02)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7klEQVR4nO2aX2iNYRzHP2NopSTG/hRlXEmtpLgh3MhWCsWdS1JW/u6GG3MzpYQLF0qtiAtuUC62tQuhJImiKJaa5P9mbJhXj75P/Xp6t/Oec3bOeZf3U2877+/5vc/5fZ9/7+85zyAjI6NQWoEe4BsQVfgaUiwt+Yo4kYLgo3Gujnx6wj0wAhwC6qk89cBhxRQl7ZleOTsRaeOIYnPDLCdDcq4jfdQptsEkzn4sppUoaXyZkDIRZUJSRpQJ+R+FVAPtwCNgWPX8Bt4CV4ClBdY7qUKOAt9jcp9nwGr5HMuRJz0Hqkydi5VJ/IzxfQccyCO+xI4TZcGvgVlAp7FdBRYA0xXwJ9mdzXMzh/DhUgi5IfvpYCg9lv2gWnuLaVHLQJD6rDHpxvzAt01lD0ohpBkYA0aBJca+Sf4fgbkS80s2J9TzXrZ5uu/R/fHge5aZ+dVaCiGOSyq7HNi7ZT+rex9IjfH5ItscYJsR7+491cBdlV0sIL7Ejk2amH+Alca+Qr0wpiHzI0bIoGxNGnbu856g/pOy9wcCJ12I45TK7wHTYoLwc8H1gOWz7E/1tztYwbargVxjrC8ivsSOs9VizmefsbtV6755vi94rs+UvQh2nvVm6HUWGV9ejn5lcsNlkbHXah71BkPPLxZu/HcBjePs/B4CM8spxHFdfneAGRRHu+nFmkmKL7FjrZkPZyiOhcAbM3dqyp1rbTDvjF0J/LcCt4D9wULh3x8DCcSULGncK/8xvZHHY6NWJV9/V4yY5cAHk+JUlVNImCzeBjZruFjOq9xlwV/1+VxMXatM+e5yC3HsNK050bUWWGd+bLsQI3qHyl5WQgh6G7cpwXxlUpVIc+mayb9ag/K4q79SQvKlWal83D7niebVlBBSCFEmJGVEmZCUEWVCUkaUND6/JU3DkVtIo2JzKUxO/K8b7swubbTnc/TWIucR7dwaqDwNEjGq2BIfU3ckSP5SfzztaVEX+sPRKfkPAxkZGfzjL18kBLIj6E1NAAAAAElFTkSuQmCC"
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default VKIcon
