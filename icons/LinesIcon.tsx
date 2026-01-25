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
const LinesIcon = (props: SvgProps) => (
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVR4nO2ZwWrCUBBFzx/UVk1rycJfEwoBF1kU3PQPqxRFKaFU8EtMSmDcvVgyq5nhnU0WM2/IzRlIIJDJZDKReAA+gQ64AMtEzwq4Ss9Hov4I7KT+A7wmet5kRgvUifocOMqM0UyArRw+A+U/ITaJ+hTYS70BFomeSgIMhSiAk8zor6OxGKLQBLG0Tg3wgpIQIfC+TvdwZwLDJmoCmKjkvHsTrTaINRMtsNYEsWaiQol7EzfcmxjCnQkMm1gQwMQz8B0lROd9nRqZ0d/PaCyGmGqCWFqnAzBDSYgQeF+ne7gzgWETGwKYeNe+R6yZ6OSBujfRar+ErZlYaUIQwcQN9yaGcGcCwyZKApgogd8oITrv63SWnv7n02gshphoglhapy/gSRMik8lkMMkfAEXjTGVz+JAAAAAASUVORK5CYII="
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default LinesIcon
