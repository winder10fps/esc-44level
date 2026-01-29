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
const AddressIcon = (props: SvgProps) => (
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlUlEQVR4nO2YTUgVURTH/5op5WdRZErYpqSUonLTJ7V+lfa5qJ2rItr5fLQpSjOCIAyhhD72GURFm8zCImhnC8U+oLKEvqW0sojeixP/gdvjzcydefPuDOEPLgzv3PO/d94999w7B5ji/6cWQALAbQDDAL6yyXMvgFYAixFhGgD0AUhpNnnRVYgQ0wF0AUhygp8AnAewlatTzCbPjQAusE+KPmcAFIT9ErMA3OGkvgFoA1Cm4Sd92gF8V1anAiGuhBVKowwtrywH8JIa/QAKEQJdnMArAFVZ6Ijva2p1wjANjG8JpxUB6K1kmP3mszGskJI9ERTHqSkp2gi1SnZy2tib+cJyhkzwOebQvxzAGLUXwQAJDiZp1I52h/PDaRUvsU8cBujlYHIm2K2E2H8AaAEwny3O31IOK7ON9lswwBMOZnfNsM4VeYl0WmmTMHMK28cwwAQHK3GxV2awVdI2buNbQrto5BzrNJ5hYx+nXcIpnWravtj4Fiu3hJwzysFqXFJz3CFR2IXWQtrlgMw5/S4bNqZs9lae3FV8iZ8uvltovwsDdHIwSbF2tPlMvx3scxoG2MHBhlz6xRhCE5oHojBMbUnDOadMCZH6AHWXUVO0S2GImxz0aICax6h5AwbZzUGfAsgPQE80nlFzFwxSBOAtB5ZP2mxppNYbahvlEAe/H4DWA2olEAKy6T9zAquz0FmrnPYVCIlTnMTVLDSuU+MkQqSady/57F3jw3+dcrfKdDczivWJ+hBAns+9Iak3dEqZbWRC2z347aTPO81amBH2K+eKTvosYl/x2YcIUQBg0EOYWJfKQRPl0jwAz10K0RvTNm6Sd6U6B9169pG+m9LScNJhrBEfe/Av6zUq6un/6EVl40+zuYpYG1wK3RbS95HGeDInz5yjs2QlXWYDeE+/AxnsB2n7CGCOB90O+smcPFGolP6dwiQTe5WTeoHye43yPb/Ho2adUhT0VOhuouMA/HGF/vcYNvlKmeiaT80Bl3paRnocalM6zOX5IBqHARzh8wcA83xqtlDjsq6D1GAnWRmXK4hfrKrhL7ZsP2GrOadJztGVZpeSjZ+EIe1sAHp91GoOvLMLM1mkGOJztjTr/smel0+DJWxBUK4b9nG+sWz2qNKjk4is01XSb1RpcjsalrLDWBgFAA8U8mZgW1c7QWM3ok835ypXl3+QW+ULjUtb1NpIel1tQwQm5bfJ3KdA1PgDYpWe90NC9SoAAAAASUVORK5CYII="
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default AddressIcon
