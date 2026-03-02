import { StyleSheet, View, ViewProps } from "react-native"
import SectionContainer from "./SectionContainer"
import ComputerColorCaption from "./ComputerColorCaption"
import { COLORS } from "@/constants/ui"
import CustomText from "./CustomText"

type ClubMapProps = ViewProps & {
    computerButtons: React.JSX.Element[]
}

const ClubMap: React.FC<ClubMapProps> = ({ computerButtons, children }) => {

    return (
        <SectionContainer style={{ marginTop: 24, marginBottom: 32 }}>

            <View style={styles.clubMap}>
                <CustomText variant="secondary" style={{position: 'absolute', top: 204, left: 8, color: COLORS.GRAY}}>Вход</CustomText>
                <CustomText variant="secondary" style={{position: 'absolute', top: 250, left: 8, color: COLORS.GRAY}}>Админ</CustomText>

                <View style={[styles.line, styles.l5]}>
                    <View style={[styles.lineComputers, styles.horisontalComputers]}>
                        {computerButtons[34]}
                        {computerButtons[33]}
                        {computerButtons[32]}
                        {computerButtons[31]}
                        {computerButtons[30]}
                    </View>
                    <CustomText variant="secondary" style={styles.l5Text}>L5</CustomText>
                </View>

                <View style={[styles.line, styles.l7]}>
                    <View style={styles.lineComputers}>
                        {computerButtons[37]}

                    </View>
                    <CustomText variant="secondary" style={styles.l7Text}>L7</CustomText>
                </View>

                <View style={[styles.line, styles.l6]}>
                    <View style={[styles.lineComputers, styles.horisontalComputers]}>
                        {computerButtons[35]}
                        {computerButtons[36]}
                    </View>
                    <CustomText variant="secondary" style={styles.l6Text}>L6</CustomText>
                    <View style={[styles.horisontalWall, { left: -16, top: '90%' }]} />
                    <View style={[styles.horisontalWall, { left: -16, top: '-80%', width: '130%' }]} />
                    <View style={[styles.horisontalWall, { left: -16, top: '190%', width: '70%' }]} />
                </View>

                <View style={[styles.line, styles.lPs]}>
                    <View style={[styles.lineComputers, styles.horisontalComputers]}>
                        {computerButtons[38]}
                        {computerButtons[39]}
                        {computerButtons[40]}

                    </View>
                    <CustomText variant="secondary" style={styles.lPsText}>PS & VR</CustomText>
                    <View style={[styles.horisontalWall, { left: '-85%', top: '90%' }]} />
                    <View style={[styles.horisontalWall, { left: '-35%', top: '-80%', width: '150%' }]} />
                    <View style={[styles.verticalWall, { left: '115%', top: -43.5, height: 85 }]} />
                    <View style={[styles.verticalWall, { left: '-35%', top: -35, height: 75 }]} />
                    <View style={[styles.verticalWall, { left: '115%', top: -154, height: 85 }]} />
                </View>

                <View style={[styles.line, styles.l4]}>
                    <View style={[styles.lineComputers]}>
                        {computerButtons[29]}
                        {computerButtons[28]}
                        {computerButtons[27]}
                        {computerButtons[26]}
                        {computerButtons[25]}
                    </View>
                    <CustomText variant="secondary" style={styles.l4Text}>L4</CustomText>
                    <View style={[styles.verticalWall, { left: -38, top: 100.5, height: 85 }]} />
                    <View style={[styles.verticalWall, { left: -38, top: -10, height: 85 }]} />
                    <View style={[styles.horisontalWall, { left: -38, top: '107%', width: 70 }]} />
                </View>

                <View style={[styles.line, styles.l3]}>
                    <View style={[styles.lineComputers]}>
                        {computerButtons[24]}
                        {computerButtons[23]}
                        {computerButtons[22]}
                        {computerButtons[21]}
                        {computerButtons[20]}
                    </View>
                    <CustomText variant="secondary" style={styles.l3Text}>L3</CustomText>
                </View>

                <View style={[styles.line, styles.l2]}>
                    <View style={styles.bigLine}>
                        <View style={[styles.lineComputers]}>
                            {computerButtons[10]}
                            {computerButtons[11]}
                            {computerButtons[12]}
                            {computerButtons[13]}
                            {computerButtons[14]}
                        </View>
                        <View style={[styles.lineComputers]}>
                            {computerButtons[15]}
                            {computerButtons[16]}
                            {computerButtons[17]}
                            {computerButtons[18]}
                            {computerButtons[19]}
                        </View>
                    </View>
                    <CustomText variant="secondary" style={styles.l2l1Text}>L2</CustomText>
                </View>

                <View style={[styles.line, styles.l1]}>
                    <View style={styles.bigLine}>
                        <View style={[styles.lineComputers]}>
                            {computerButtons[0]}
                            {computerButtons[1]}
                            {computerButtons[2]}
                            {computerButtons[3]}
                            {computerButtons[4]}
                        </View>
                        <View style={[styles.lineComputers]}>
                            {computerButtons[5]}
                            {computerButtons[6]}
                            {computerButtons[7]}
                            {computerButtons[8]}
                            {computerButtons[9]}
                        </View>
                    </View>
                    <CustomText variant="secondary" style={styles.l2l1Text}>L1</CustomText>
                </View>
            </View>

            <View style={styles.computerColors}>
                <View>
                    <ComputerColorCaption text='свободные' />
                    <ComputerColorCaption text='бронь' />
                </View>
                <View>
                    <ComputerColorCaption text='занятые' />
                    <ComputerColorCaption text='выбранное' />
                </View>
            </View>
            {children}
        </SectionContainer>
    )
}

const styles = StyleSheet.create({
    clubMap: {
        position: 'relative',
        width: '100%',
        height: 410,
        borderWidth: 2,
        borderColor: COLORS.DARK_GRAY,
        borderRadius: 8
    },
    computerColors: {
        flexDirection: 'row',
        gap: 32,
        marginTop: 24
    },

    // lines
    line: {
        position: 'absolute',
    },
    horisontalComputers: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    lineComputers: {
        gap: 8
    },
    bigLine: {
        flexDirection: 'row',
        gap: 8
    },

    l5: {
        top: 8,
        left: 16
    },
    l7: {
        top: 64,
        left: 8
    },
    l6: {
        top: 152,
        left: 16
    },
    lPs: {
        top: 152,
        left: '40%'
    },
    l4: {
        top: 8,
        right: 8
    },
    l3: {
        bottom: -10,
        right: 8
    },
    l2: {
        bottom: -10,
        right: '25%'
    },
    l1: {
        right: '55%',
        bottom: -10,
    },

    // text
    l5Text: {
        left: '46%',
        top: 4
    },
    l7Text: {
        top: '-50%',
        left: 30
    },
    l6Text: {
        top: '-109%',
        left: 20
    },
    lPsText: {
        top: '-109%',
        left: 18
    },
    l4Text: {
        top: '-50%',
        right: 24
    },
    l3Text: {
        top: '-50%',
        right: 24
    },
    l2l1Text: {
        top: '-103%',
        left: 20
    },

    // walls
    horisontalWall: {
        position: 'absolute',
        width: '200%',
        height: 2,
        backgroundColor: COLORS.DARK_GRAY
    },
    verticalWall: {
        position: 'absolute',
        width: 2,
        backgroundColor: COLORS.DARK_GRAY
    }
})

export default ClubMap;