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
const FoodIcon = (props: SvgProps) => (
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcklEQVR4nO2aWYiOURjHf2PJiEjCmAuU7UahKYRsCTeWsmS5Qcm+FSnLBVFD4gYXEkUJF7jAja0oslNC9kLWkbINhtFT/0+nt+99v0/OOeNifvWWznnO//+ez1me856Beur5rxgO3AB+ALWeHtO6BgyN1YnuwFePHUg+X4DOMTqyUYb7gVKPuqZ1SNobiMBVmdnw8s0oaV8kEG2BPcDbgEMq+byVp3l7obHzv1AXz1W9wz8zTYL3gQ7EowPwQN5TfQjukdh84rNA3rt9iN2R2ADiM1Det32IfZBYV+LTXd5VPsS+1+FEr9XzzUdHzv8HHTmHR25KtILwVMjLPL1zVOLjCc8EeR0JIb5V4ssIz3J5bQkhvkji2wnPDnktDCE+WuIniogtA9YDt4DPwCfgOrAGaF1E+xPyMk/v9JD43QJx45y9Jy0ZLPSCdxVrnt5pLnE7VJWkxEx09p3jygaaAs2AYcAZ1dUAk1I0SpyDm3kG4Y0MyvPU2c5fDfwC5hQxkT+lJKHlqjevYFySSf+McW1zA/2aO5RevNEKVJpYAQ/n0emvOvMKxsECO/ArDaMGwNk89TbcjBbAuwJaB0J2pDLD2IbVDMWNVdlLoCfQ1zldjlTMLOVQaXqVITsyWya7CsTlhpk7V5aqzDKELHYpzryCMVImpwrEPVWcO5m7qOxRgbanFDeCgHQr8mWqFdfEKSt1lu8sHsU4/9iL/dRe0aiIl3E/tHVS2ZOMdo2k/TPxIwThmV6oYxGZ8hKnbF5i5cpHR8WYR3DSDlrfnQ8UublkK1U/oJdWMCsbU8SqdS5GR/ZmLJnvgZaKO56n/rT2GEtbXmfo7I3RkbUyW5coP6nyzc7k3qwXtt19mzZL1NZiLyQ01qncPIIzQ2b7EuV9nIRxcUb7WcrH7BphUKJun9pPJwJDZGZzJclMZ3gc04fuVhpuQ5Vb1WZ88DuvusER+vFnGX2ecR6pyhj/H4HJKW1f5NlIg9HQWevT7kfaACuAy+rUB/17NdAupY1p5fYo84jCY/1yttP7/qr4kIicTmSyPi95ThKRXIaadRL8W+ZKcycRWSVTu0/0xSZpriQiucsfOzH6IncROoWI5M7VthL54oo0LTeLRnuZVnm6oi519p4yIlKiO8Vaz8896oAK/clFjYcO1Oj2tndddKSeekjnNwlTAfhiSW8LAAAAAElFTkSuQmCC"
                id="c"
                width={50}
                height={50}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default FoodIcon
