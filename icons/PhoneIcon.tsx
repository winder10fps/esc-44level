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
const PhoneIcon = (props: SvgProps) => (
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
                <Use xlinkHref="#c" transform="scale(.02083)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnUlEQVR4nO2YXYhNURTHf9dgyLfxIEyNNA8+SkiU8tEkahJKNE9SZN6mKIWmlAcPBg8m8kThATOhFJFCTD7yQjJKEtEoYkq+hrlatY5Wq30GU/fMvnV+tR/uWf/2+Z+z991rrQM5OTk55cYgoB7YCzQAQykjaoFbQNGM68AwyoAVwCdnPhmtRE4D8NMY/gE8Mr97gdVESjXwxZiVVajT2Dlz/T0whQjZZ0zKg8w1sXHASxO/AVQQGR3G4K5AfBHQYzTNRMYzY256iqbZaHr0oaLhvjE3LUVTodsn0d0hIi4bY8v60NW7U6pAJLQaY9tTNOOBh0b3lIjYaIxdCsQrgQdG8wtYRURM0kQl5r7p0WlpcuY3ESH3jMlGFztuYleIlK1uf0tFmrDDxL4CS4iQUUC3MbrexEa4XCGlxhwiZI8x+dz1AVOBNyb+TkvvqBgDfDAm5YEss1xcaqTJRMYWl6xmu/hC4LPRPAGqAvMsBVqAncBEMqTgOrJOYHSg8fluNHeBkRobDBx2zVC35prMqHV/6PZA2bBBc0KiuQbMA66mdHRFoC1ltUrCOnfzAwFNYx9mZdwEXrhrb3UFM+Ggu3moD9gdMN6rWlk1OYKPmkyfxGWbDS/1A0gyO+3MtQS20zZNcBJ/DawNzLVS376dq0PrrJIyBLjobiy/xzqdfHapUX0aVcAZN9fmEvv/Y84290Xd28v7OV+7mWc/GVHQxOb38llgxn/MU6lZPpkj0+NVWAN0udWQ4/QksOAfXsIxV1P5HJMJ0p2dSDk6O3WlFrtTpgY477Rp3V9mzNcOLi0PyNeLV7pl7NaTcSGmnlpK6yPAx78ktqKOU1nkgP6eVpJlDwG3Ax+KH7s+oyyoBmYCEwbaSE5OTk5ODgPBbyUmGIvHttMxAAAAAElFTkSuQmCC"
                id="c"
                width={48}
                height={48}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default PhoneIcon
