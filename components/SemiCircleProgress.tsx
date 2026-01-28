import { View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "@/constants/ui";


interface SemiCircleMeterProps {
    progress: number;
    radius: number;
    strokeWidth: number;
    style?: ViewStyle;
}


const SemiCircleMeter: React.FC<SemiCircleMeterProps> = ({
    progress,
    radius,
    strokeWidth,
    style
}) => {
    if (progress < 0 ||
        progress > 100 ||
        radius < 1 ||
        strokeWidth < 1) {
        throw new Error("Передать в progress bar правильные значения!");
    }

    // Внутренний радиус (центр линии)
    const innerRadius = radius - strokeWidth / 2;
    const diameter = radius * 2;

    const containerHeight = radius + strokeWidth / 2;

    // Центр окружности
    const centerX = radius;
    const centerY = radius;

    // Ограничение прогресса от 0 до 100
    const clampedProgress = Math.min(100, Math.max(0, progress));

    // Угол прогресса в радианах от 0 до PI
    const progressAngle = (Math.PI * clampedProgress) / 100;

    // Начальная точка прогресса
    const startX = centerX - innerRadius;
    const startY = centerY;

    // Конечная точка прогресса
    const endX = centerX + innerRadius * Math.cos(progressAngle - Math.PI);
    const endY = centerY + innerRadius * Math.sin(progressAngle - Math.PI);

    // Конечная точка фона
    const endBackgroundX = centerX + innerRadius;
    const endBackgroundY = centerY;

    return (
        <View style={[{ width: diameter, height: containerHeight }, style]}>
            <Svg width={diameter} height={containerHeight}>
                <Path
                    d={`M ${startX} ${startY} 
                        A ${innerRadius} ${innerRadius} 0 0 1 ${endBackgroundX} ${endBackgroundY}`}
                    stroke={COLORS.CARD_BACKGROUND}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeLinecap="round"
                />

                {clampedProgress > 0 && (
                    <Path
                        d={`M ${startX} ${startY} 
                            A ${innerRadius} ${innerRadius} 0 0 1 ${endX} ${endY}`}
                        stroke={COLORS.PRIMARY}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeLinecap="round"
                    />
                )}
            </Svg>
        </View>
    );
};


export default SemiCircleMeter;