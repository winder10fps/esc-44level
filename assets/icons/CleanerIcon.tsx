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
const CleanerIcon = (props: SvgProps) => (
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEaklEQVR4nOWaa4hVVRTHf86kTj4qtXTCMoy0Ppj1RS0RKyVKBDEq08pAMR89RRQt8YFfUuuDlEFWlIKMGiEzjIJSPnqHhiim+UpqzJ5U6mQaPq4s+G/ZHJx79z733pkj/eDA3Llr7bPWOXuvvdbaF/6ntOMyphKYCfwE5ICzwNfAdOAmLiPekgN2nQBOe5/PA18B04AbyTB3eg7cpf+1BYYDK4BjCae+AF4EupMxXpaRrzXxvTk1AlgpZ51T54DPgOeB68kAC2XYSwGyVcBDwCqgMeHUVuBZoJoW4jEZsw+4OkLvSuBhYA1w0nPKAsVmYDJwLc1IW2CPjDgAPCEjY2gPjAI+BP71nDoFLANuoJnoCexMRK73gaFAReRYHYAxQJ3ejo33C9CfZuIKTYftnkM57S2Lgb4pH1C9N07M1C0JtwILgO8TTu0GZgE9IjfbrdK3MVuEVsBAYCnwRyJKfQJMDHzK90jvB43ZorTWJlmTiFJ/AlMLGGjr7FfJ9yFD2IIeC2zyHHq1gE6N5F4go9g+dEbpS688chPkSC0ZZoWMtDXTFDdL5m8FgEzyhox8poDcYcn1I4NUeAYOKiD7ruSs9skcY2Tc4YAs4HHJbiRj2Fz/TsY9HSDfTUHhpHK8zDDW2+jaBOrskc5gMvQ29smocRF6r0tnPhlhnAw6qIQzlJHS+5QM0NpLKJ+M1L1G6f1/qmNKhi26B1Szf6no06gbWX70ETAvkcbfBjQAe1Nubtv0EB4slQPPeb2skMscHebp50tJ8vGKxrM6pyis9PzGM3CXaoX71JDrIEN7qNlQo7LVydepaErL/RrHbEiN5Tw/ewt1RGCNYHN7BnBculabjy+iLXtaa6VTmgGsqbBDhmwBOqcYo9pLEu1aEhm1HFukb288mvlS3g9cRXE85U23+ogN0TFXuravRNFR1VxIchfKAK/yWx3ZcRkkvW/TPMGcau1S945df/jNCL02wD/KvSwHC2Z5GUvNwd40i5nzG6RjVWYwLlmzJ1gOpmn834CugTozpWPdyGB+l9J1lIcKdeftHu8F6vTzWrXBuPZlOevlO3SPM4EnXZWq4XMxh0gu7pebj3WfOYHydZK3YBTliJ1KvaO8aZua1UMoHY9EpulTJW/BKIhkAnhUl/u8Ugc5xVLtdSBD6Cv5H0NvcN7bhf2stTewznOmWKq8s5EQWnmB6JbQ6FDfxO5b4TlzL8XRX+NYUyKUD0IbGMskaE8/31FCTOikiQfiNjmrOUKZIh0rF/LyuQqoQhxVAEhDR69RbZtil8T3Vg0eiSji/KvBVZPbIxyxc/QYKhWpDummjTpTSdKQ0omc58zFPCtkar0d6IClOrMTp1p2onV7GfaxnNMdoj/W5Vns6yVjqbmLJp30C4e7gUfVhKhNhG1X30wqUJOUxBEUWp0zvRNvwjkRcx3Rb1iGBdYhxUyrnO9IlefMpTbE5GX7zl+q7y0ArAUWAaMLTNGyO4KwfcJCrBlnC9tCs5tOmeYCwJa5gvk+ypEAAAAASUVORK5CYII="
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default CleanerIcon
