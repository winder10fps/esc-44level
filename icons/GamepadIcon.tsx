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


const GamepadIcon = (props: SvgProps) => (
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQUlEQVR4nO2aW4hVZRTHf2qOOup4yxRUUmgyIS9gT5m3wMs4amppCEFg2oMPXlEKRB8UdHxQxAtkPembFwi1iyhCJFp5N42ixMuIkqXo6FiJ44kF/y3L8ex99pmzj2c2+IcNZ+9vrfWt9V3Wt9b6DjxHSfAdcIyUowuQAf4m5aiSIYdJMcqB4zLkY1KK3sD3MuI00IaUoTuwBrgrIy4AfUgRXgHWAfdkgD07tNmbPVoBU4D9wCNnwAFgOClAW2Celk2gvC2lz4DBpAQfAlecAb8Cc4EKUoKewDfOgPPATKAlKUJ/4KI7oT9ImwHBeXBdRhzVzKQOLwA/yohDOqlTiY9khC2rbqQULYHLMmQGKcZbMuIPoAXNBNXAt8BNoF4jvRdYALwUwlMjQ9ZmaesBLAT2SVa9ZFsfE4phgB1Su53vz/b8B2xVrOSxT+3vum9G87l4omTuBDomGYWeleA7wBKNfjtFo6bgl0CDaB4qyJsGvKwT275PBt6Tcg/1rUG80ySrnWZpqfoymjPAi4UaYW7yBwn8GegbQVsZc5Qzimw3iycM/dRncO6UF+L797qNajMTB9nWvRl3CfhK+6lrTFnd1bfpsEdRct5YIQE3coxcsVEJ/CVdlufLPEijaLnBaEqPt6WL6TQwnyV1TCOwieaDLdLpFNA6DsN8MVxK0vUlgI7SKSMdI1HuIlRLPUtx4F4FalXHaowp0u16Li+2RITHI8IJ70aTRq2TbdljY5hOJ9S+OExIB3koI5oY0VkpDTFMUvufQHuyYI4IfiIaxTSkSsaYEeNDaFo4Z2TpwVM4rMZZWdpyndSZIu2J6pD2IL+xCuQTeFV+uj7EUxXLkFxLqTakvUK6PmocpK4S8baQDpubIYbt+r4Sh1P6OI7cSHKP5NoTVRHt46TDyeBDZ4XTD8K8wDPc7NU59oxHe+lsKUGngNmUOhKzs1K7X48jop3gU1Er4ZcatXkaEui+Gle+LEVI0pRzxGOqdLc853Eq+jrJYYDuOM7LTdpzTt9eS7CfQdL9F3u5pZe4WVsUzHF84fL3bE+DUmKjLRTd/E1vkGOXFSh0pCvENajIMEoxXAf93uUuciwkH1Fgn2WugsM/erFLl6bAYp9PXWXE/PqQCPohogkqLp8UULhrKzn3kd/OqHSTLyo0yhmNdE3MmS1TwS6YnV1NvODp5z3c102sy74B/C7e26pb5Yt3xJuRrKF58r/vvdYCvVihLO50Lnd760SBVZZKlyz9CyzLY5nvEd+8oHZUp2keE8FkNaXp7uLS6NcndIFvMja4pXZBVcmo26yxoq/zlchFEnBHCVYnjUovHUxrXeIfzMIwksdw5wiC+5QaBYi9pFNn/Y2jTjRWDHwM8xobY4TqdnjOLvK9Xyv18VsMfWwWs8Ly4YM6JM0tX9NVmcVhbz7j+w3ry2bd+jYdTBfTyXSzPxI8UVf4Hzx2sNbPpkujAAAAAElFTkSuQmCC"
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)


export default GamepadIcon
