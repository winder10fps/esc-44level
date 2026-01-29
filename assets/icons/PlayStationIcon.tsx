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
const PlayStationIcon = (props: SvgProps) => (
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADfUlEQVR4nO2Za2iPURzHv6bNXSjNbco0LDWKFUYuc5moSVlScolib1xfKOQuKSNRU4rZK2NNo7ywyMaSQrm3cje3vJhrw2Y69T05Huf/mD3fvxfat86L/+//9Pmdbz3nnN/5PUCr/m+NBFAF4AuApr8cHwFUAMiIx8TaAygA8CpkAmbyRskA3rbAQHDUAUhRG9nTjMTWyFL+Pg+gSwtydQJwgoztYh94QXBWM57dzWfXRcg3i4wyiGXf9aRmPFvMZxdFyDedjLMQq47gbp7/cgHcBvA58KrNiJAvmwyz6KV6SXCvQHwUgG8x1kxmhHzjybgIsR4SPCAQLwtZ/P0j5BtDRjXEuktwuhNLAPAhxIjZsluqTDKuQqxrBI9wYoP+cAZE0XBybkCsS57td3SIkZqI+YaQcx9iVRA82YlNDTFijEdRb3JMJSHVGYJnOrGcECMnI+brQE49xLIlwxwnNjHEyEFBznrBpvGbighd4MSyQoxsFuR8TZYpQmXaT+gKzxbpG8sFOWvIGgyhthK6yYkNCzEyW5CzmqxxEGoVofucWHqIkbGCnKVk5UGohYSatWI1MMRImiDnAc/rHFn2flDuxFJCjHQV5FxP1i4IZavRSieWHMOEau9f7HkLIiuDUHPvsOoew0itKOcU8i5AKPsaPQ/crX1GXLNRlEbeYwjVmdBPTiwxhhH39YuiJACNABqYS6I2AL5you2ceKPHiLshRNUzMlOFTLzxXHdtPeSOo8KclWROEjJxj9ChTuy9x4jpgalUTKbZwWS67CkZfB3FDcKc28jcImTiNKGm/RNs3LkjX5hzSTzOkiJP4+2Rx8g8Yc7seLSFCghd61k37pgmzDmQzCdCJjYSusOJXRc35oJK5DkiPUvyOdFCT3fFHdKLEICn6rNkLoElTuycx0g/aFVF7gQV0LZ/zOStyj1GekCrUk/jI5J8/dgSjxG3hFHokLAP8Espf9OzJdthFqVaO9QHbSqBpjNvVRgwYkoWtVaTvVcF7EmgKR6DZ0tTvFqc+Hm6H1YBOxJovkxZ7QwYeQC95pN9THknaSC0beCQtOMW9Moj+7gS+i7QJVkTMHIFeuWSfUoJrSW0T+C0b3K+rauVE48vvNXOnt6VlbBrxFTDfYX5EtgQN+wjQi6WxWg4xHt8V5YodsGv5Ccxu17iORoB3FH3f1uFf6gfrUn1XRaJ77YAAAAASUVORK5CYII="
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default PlayStationIcon
