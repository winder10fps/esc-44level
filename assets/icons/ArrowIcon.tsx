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
const ArrowIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Mask
            id="b"
            width={24}
            height={24}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <Path fill="url(#a)" d="M0 0h24v24H0z" />
        </Mask>
        <G mask="url(#b)">
            <Path fill="#fff" d="M0 0h24v24H0z" />
        </G>
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#c" transform="scale(.01)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAADGUlEQVR4AezbaW7UQBQEYLNci2uAWARC/ESCs7D8RQgEiaLcIufKVpXJSJnIaWdzd716L+qXzNjWdLs+ObYT99OpvqQSKBApjmkqkAIRS0BsOHWEFIhYAmLDqSOkQMQSEBtOHSEFIpaA2HDWOULEdjLScApETKtACuROCTzB1u9Rz1ApmvIRQowfUPiD+o96jrJvqiBbjM+XAq/w8x/KHkUR5DoGHC5aChRFkO+If3tk4OVOI8pvLLE9pyiCHCHwY9RN7R1W2J5TFEEOEfgbVAuFR4rlOUURBBbTHAqXXy1LFFUQBp8SRRkkJYo6SDqUCCCpUKKApEGJBJICJRqIPUpEEGuUqCC2KJFBHgeFnyJU0UEYpdUdvQOIFYoLiA2KE4gFihtIeBRHkNAoriBhUZxBQqK4g4RDyQAyAoV93quygDCcEHf0mUBCoGQDkUfJCCKNkhVEFiUziCRKdpAtCmdpnfDNDcXHVrs8dV8gG4F9/HiNaj3gzafuf2GbVTNb9cMx+EjtNvcpH7BD31CrtQLZjZazt3aXdH7XBOk8ltHdvcQAliYCcQLqV2y3WiuQTbQ8f+zhZWtSKScIfcI2p6jVWoFME4+Mv0i4NW/xAOs/olpXYlj98JYdhBhLv6aIwSus1hXYwyUuPyEziBwGTbKCSGJkBZHFyAgijZENRB4jE0gIjEEg7LZrhcFgKu5XWaEw3EHCYTiDhMRwBQmL4QgSGsMNJDyGE4gFhguIDYYDiBVGdJAdDO7MTHX959JM/3deFPVO3RKDehFBbDEiglhjRAOxx4gEkgIjCkgajAggqTDUQdJhKIOkxFAFEcJgRH1L8cbwBSJYegr9Lbbp8qwt+unaFEG+IIGfqLnGv011eQp9rvMeyxRBzrDjcyjE6PYUOsYwpCmCMIjrKCkwuOOqIBzbFoUTLW3PGdzRq6UMwnEShbObVp+5xM4USh1EIaOuYyiQrnEvd1Ygyxl13aJAusa96az1vUBa6QxYVyADQm91WSCtdAasK5ABobe6LJBWOgPWFciA0FtdFkgrnQHrCmRA6K0uzwEAAP//mAVDuwAAAAZJREFUAwDGeNfJk2fKkAAAAABJRU5ErkJggg=="
                id="c"
                width={100}
                height={100}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default ArrowIcon
