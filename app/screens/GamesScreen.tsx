import CustomText from '@/components/CustomText';
import StackScreen from '@/components/StackScreen';
import { COLORS } from '@/constants/ui';
import { useUpdateTabs } from '@/hooks/useUpdateTabs';
import { RefreshControl, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

interface GameItem {
    name: string;
    client: string;
    location: string;
}

// Данные из предоставленного списка
const gamesData: GameItem[] = [
    { name: 'A PLAGUE TALE: INNOCENCE', client: 'Steam', location: 'L-9' },
    { name: 'A PLAGUE TALE: REQUIEM', client: 'Steam', location: 'L-9' },
    { name: 'A WAY OUT', client: 'Steam/Origin', location: 'L-6' },
    { name: 'ACT OF WAR: DIRECT ACTION', client: 'Steam', location: 'L-1' },
    { name: 'AGE OF EMPIRES II (2013)', client: 'Steam', location: 'L-1' },
    { name: 'AGE OF EMPIRES® III (2007)', client: 'Steam', location: 'L-5' },
    { name: 'ALIENS VS. PREDATOR', client: 'Steam', location: 'L-1' },
    { name: 'ALIENS: COLONIAL MARINES', client: 'Steam', location: 'L-4' },
    { name: 'ALIENS: FIRETEAM ELITE', client: 'Steam', location: 'L-6' },
    { name: 'AMONG US', client: 'Steam', location: 'L-6' },
    { name: 'ANCESTORS LEGACYTHE', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6 L-7' },
    { name: 'APEX', client: 'Origin', location: 'L-5 L-6 L-7 L-8' },
    { name: 'ASSETTO CORSA', client: 'Steam', location: 'L-2' },
    { name: 'BATTLEFIELD 1', client: 'Steam/Origin', location: 'L-5 L-6 L-7 L-8 L-9' },
    { name: 'BATTLEFIELD 4', client: 'Steam/Origin', location: 'L-2 L-3 L-9' },
    { name: 'BATTLEFIELD 5', client: 'Steam/Origin', location: 'L-9' },
    { name: 'BEYOND: TWO SOULS', client: 'Steam', location: 'L-9' },
    { name: 'BRIGHT MEMORY: INFINITE', client: 'Steam', location: 'L-9' },
    { name: 'CALL OF DUTY WAR ZONE 2', client: 'Steam', location: 'L-5 L-6 L-9' },
    { name: 'CALL OF DUTY: MODERN WARFARE II', client: 'Steam', location: 'L-9' },
    { name: 'CALL OF DUTY: WWII', client: 'Steam', location: 'L-9' },
    { name: 'CALL TO ARMS', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6' },
    { name: 'CARMAGEDDON: MAX DAMAGE', client: 'Steam', location: 'L-4' },
    { name: 'CHIVALRY: MEDIEVAL WARFARE', client: 'Steam', location: 'L-2' },
    { name: 'CHIVALRY 2', client: 'Steam', location: 'L-6' },
    { name: 'COMMAND & CONQUER RED ALERT 3', client: 'Steam', location: 'L-4' },
    { name: 'COMPANY OF HEROES 2', client: 'Steam', location: 'L-4' },
    { name: 'COUNTER-STRIKE', client: 'Steam', location: 'все' },
    { name: 'COUNTER-STRIKE: SOURCE', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5' },
    { name: 'COUNTER-STRIKE 2', client: 'Steam', location: 'все' },
    { name: 'CRYSIS 1 -2-3 REMASTERED', client: 'Steam', location: 'L-9' },
    { name: 'CYBERPUNK 2077', client: 'Steam', location: 'L-9' },
    { name: 'DARK SOULS III', client: 'Steam', location: 'L-9' },
    { name: 'DARK SOULS: REMASTERED', client: 'Steam', location: 'L-9' },
    { name: 'DAY OF DEFEAT: SOURCE', client: 'Steam', location: 'L-1 L-2 L-3 L-4' },
    { name: 'DAYS GONE', client: 'Steam', location: 'L-8' },
    { name: 'DAYZ', client: 'Steam', location: 'L-5' },
    { name: 'DEAD BY DAYLIGHT', client: 'Steam', location: 'L-3' },
    { name: 'DEAD ISLAND', client: 'Steam', location: 'L-2' },
    { name: 'DEAD ISLAND RIPTIDE', client: 'Steam', location: 'L-2' },
    { name: 'DETROIT: BECOME HUMAN', client: 'Steam', location: 'L-9' },
    { name: 'DIRT RALLY', client: 'Steam', location: 'L-1 L-2 L-3 L-4' },
    { name: 'DIRT SHOWDOWN', client: 'Steam', location: 'L-2' },
    { name: 'DOOM ETERNAL', client: 'Steam', location: 'L-9' },
    { name: 'DOTA 2', client: 'Steam', location: 'все' },
    { name: 'DYING LIGHT', client: 'Steam', location: 'L-5 L-6' },
    { name: 'ELDEN RING SHADOW OF THE ERDTREE', client: 'Steam', location: 'L-6' },
    { name: 'ENSHROUDED', client: 'Steam', location: 'L-9' },
    { name: 'EURO TRUCK SIMULATOR 2', client: 'Steam', location: 'L-5 L-6' },
    { name: 'FALL GUYS', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6 L-7 L-8' },
    { name: 'FAR CRY 5', client: 'Steam', location: 'L-6' },
    { name: 'FLATOUT 2', client: 'Steam', location: 'L-1' },
    { name: 'FORTNITE', client: 'Epic', location: 'L-1 L-2 L-3' },
    { name: 'FRONTLINES: FUEL OF WAR', client: 'Steam', location: 'L-4' },
    { name: 'GANG BEASTS', client: 'Steam', location: 'L-1' },
    { name: 'GAS GUZZLERS EXTREME', client: 'Steam', location: 'L-1' },
    { name: 'GRAND THEFT AUTO IV: THE COMPLETE EDITION', client: 'Steam', location: 'L-2' },
    { name: 'GRAND THEFT AUTO V', client: 'Steam/Epic', location: 'все' },
    { name: 'GRID 2', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6' },
    { name: 'HALF-LIFE 2: DEATHMATCH', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6' },
    { name: 'HITMAN 2', client: 'Steam', location: 'L-9' },
    { name: 'HITMAN WORLD OF ASSASSINATION', client: 'Steam', location: 'L-6' },
    { name: 'HITMAN: ABSOLUTION', client: 'Steam', location: 'L-6' },
    { name: 'HOMEFRONT: THE REVOLUTION', client: 'Steam', location: 'L-5' },
    { name: 'HUMAN FALL FLAT', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6' },
    { name: 'HUNT: SHOWDOWN', client: 'Steam', location: 'L-5 L-6 L-9' },
    { name: 'INSURGENCY: SANDSTORM', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6' },
    { name: 'JUST CAUSE 3', client: 'Steam/Epic', location: 'L-2' },
    { name: 'KILLING FLOOR 1', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6' },
    { name: 'KILLING FLOOR 2', client: 'Steam/Epic', location: 'L-3 L-4 L-5' },
    { name: 'KINGDOM COME: DELIVERANCE', client: 'Steam', location: 'L-9' },
    { name: 'LEAGUE OF LEGENDS', client: 'Riot', location: 'L-2' },
    { name: 'LEFT 4 DEAD 1-2', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6' },
    { name: 'LITTLE NIGHTMARES', client: 'Steam', location: 'L-1' },
    { name: 'LOTR: THE BATTLE FOR MIDDLE-EARTH II', client: 'Steam', location: 'L-1' },
    { name: 'MAFIA 1-2 DEFINITIVE EDITION', client: 'Steam', location: 'L-9' },
    { name: 'MAFIA 3 DEFINITIVE EDITION', client: 'Steam', location: 'L-5 (pc33)' },
    { name: 'MEDAL OF HONOR', client: 'Steam', location: 'L-4' },
    { name: 'MEDIEVAL DYNASTY', client: 'Steam', location: 'L-9' },
    { name: 'MEN OF WAR: ASSAULT SQUAD 2', client: 'Steam', location: 'L-3' },
    { name: 'METAL GEAR SOLID V: GROUND ZEROES', client: 'Steam', location: 'L-1 L-2' },
    { name: 'METAL GEAR SOLID V: THE PHANTOM PAIN', client: 'Steam', location: 'L-1 L-2' },
    { name: 'METRO 2033', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6 L-7 L-8' },
    { name: 'METRO EXODUS', client: 'Steam/Epic', location: 'L-9' },
    { name: 'METRO: LAST LIGHT COMPLETE EDITION', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6 L-7 L-8' },
    { name: 'MORDHAU', client: 'Steam', location: 'L-5 L-6' },
    { name: 'MOUNT & BLADE II: BANNERLORD', client: 'Steam', location: 'L-9' },
    { name: 'MUDRUNNER', client: 'Steam', location: 'L-1 L-2' },
    { name: 'NEED FOR SPEED: HOT PURSUIT', client: 'Steam', location: 'L-1' },
    { name: 'NEED FOR SPEED: MOST WANTED', client: 'Origin', location: 'L-1 L-2 L-3 L-4' },
    { name: 'NEED FOR SPEED: SHIFT', client: 'Steam', location: 'L-1' },
    { name: 'OUT OF REACH: TREASURE ROYALE', client: 'Steam', location: 'L-4' },
    { name: 'OUTLAST 2', client: 'Steam', location: 'L-2' },
    { name: 'PAYDAY 1 2', client: 'Steam', location: 'L-2 L-4' },
    { name: 'PHASMOPHOBIA', client: 'Steam', location: 'L-2' },
    { name: 'POINT BLANK', client: '4game', location: 'L-3' },
    { name: 'PUBG: BATTLEGROUNDS', client: 'Steam', location: 'все' },
    { name: 'QUAKE CHAMPIONS', client: 'Steam', location: 'L-3 L-1 L-4 L-5 L-6 L-7 L-8 L-9' },
    { name: 'RAFT', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5' },
    { name: 'RAGE2', client: 'Epic', location: 'L-9' },
    { name: 'RED DEAD REDEMPTION 2', client: 'Epic', location: 'L-9' },
    { name: 'REMNANT: FROM THE ASHES', client: 'Epic', location: 'L-9' },
    { name: 'ROAD REDEMPTION', client: 'Steam', location: 'L-1' },
    { name: 'ROBOCOP: ROGUE CITY', client: 'Steam', location: 'L-9' },
    { name: 'RUST', client: 'Steam', location: 'L-4' },
    { name: 'RYSE: SON OF ROME', client: 'Steam', location: 'L-2 L-3 L-4 L-5 L-6' },
    { name: 'SCUM', client: 'Steam', location: 'L-5 L-6 L-9' },
    { name: 'SERIOUS SAM 2', client: 'Steam', location: 'L-1' },
    { name: 'SERIOUS SAM 3 BFE', client: 'Steam', location: 'L-2' },
    { name: 'SEVEN DAYS TO DIE', client: 'Steam', location: 'L-2' },
    { name: 'SHADOW WARRIOR 2', client: 'Steam', location: 'L-1' },
    { name: 'SNIPER ELITE 4', client: 'Steam', location: 'L-2 (pc11)' },
    { name: 'SNOWRUNNER', client: 'Steam', location: 'L-6' },
    { name: 'SOCCER ONLINE: BALL 3D', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6 L-7 L-8' },
    { name: 'SONS OF THE FOREST (2)', client: 'Steam', location: 'L-6' },
    { name: 'SPEC OPS: THE LINE', client: 'Steam', location: 'L-3 L-4' },
    { name: 'SPINTIRES', client: 'Steam', location: 'L-1' },
    { name: 'STAR WARS: BATTLEFRONT 1', client: 'Epic/Origin', location: 'L-5' },
    { name: 'STAR WARS: BATTLEFRONT 2', client: 'Epic/Origin', location: 'L-4' },
    { name: 'STICK FIGHT: THE GAME', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6 L-7 L-8' },
    { name: 'STRONGHOLD CRUSADER HD-2', client: 'Steam', location: 'L-1' },
    { name: 'SUPERHOT', client: 'Steam', location: 'L-2' },
    { name: 'TERMINATOR: RESISTANCE THE FINALS', client: 'Steam', location: 'L-9' },
    { name: 'THE FOREST', client: 'Steam', location: 'L-1 L-2 L-3 L-4 L-5 L-6 L-7 L-8' },
    { name: 'TOM CLANCY\'S RAINBOW SIX SIEGE', client: 'Steam', location: 'L-2' },
    { name: 'TOTAL WAR: SHOGUN 2', client: 'Steam', location: 'L-5' },
    { name: 'TOTALLY ACCURATE BATTLE SIMULATOR', client: 'Steam', location: 'L-1' },
    { name: 'VALHEIM', client: 'Steam', location: 'L-1' },
    { name: 'VALORANT', client: 'Riot', location: 'все' },
    { name: 'WAR THUNDER', client: 'Steam', location: 'все' },
    { name: 'WARFACE', client: 'VKplay', location: 'все' },
    { name: 'WARHAMMER: END TIMES - VERMINTIDE 1-2', client: 'Steam', location: 'L-1 L-2' },
    { name: 'WITCH IT', client: 'Steam', location: 'L-4' },
    { name: 'WOLFENSTEIN II: THE NEW COLOSSUS', client: 'Steam', location: 'L-9' },
    { name: 'WORLD OF TANKS BLITZ', client: 'Steam', location: 'L-1' },
    { name: 'WORLD WAR Z', client: 'Steam', location: 'все' },
    { name: 'WRC 7', client: 'Steam', location: 'L-1 L-2' },
    { name: 'ZERO HOUR', client: 'Steam', location: 'L-4' },
    { name: 'МИР ТАНКОВ', client: 'Lesta', location: 'все' },
];

const COLUMN_GAP = 24; // отступ между колонками

export default function GamesScreen() {
    const { refreshing, onRefresh } = useUpdateTabs();
    const { width: screenWidth } = useWindowDimensions();
    const horizontalPadding = 16; // отступы контейнера секции слева и справа
    const availableWidth = screenWidth - horizontalPadding * 2;

    const headers = ['Название', 'Клиент', 'Где установлена'];
    const columnWidths = [200, 100, 150]; // базовые ширины колонок
    const columnCount = headers.length;

    const totalBaseWidth = columnWidths.reduce((sum, w) => sum + w, 0);
    const totalWidthWithGaps = totalBaseWidth + (columnCount - 1) * COLUMN_GAP;

    // Определяем, нужно ли масштабировать колонки, чтобы заполнить экран
    let factor = 1;
    let innerContainerWidth = totalWidthWithGaps;

    if (totalWidthWithGaps <= availableWidth) {
        const availableWithoutGaps = availableWidth - (columnCount - 1) * COLUMN_GAP;
        factor = availableWithoutGaps / totalBaseWidth;
        innerContainerWidth = availableWidth;
    } else {
        factor = 1;
        innerContainerWidth = totalWidthWithGaps;
    }

    return (
        <StackScreen title='Игры' style={{ paddingHorizontal: 8 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[COLORS.PRIMARY]}
                        progressBackgroundColor={COLORS.CARD_BACKGROUND}
                    />
                }
            >
                <View style={styles.listContainer}>
                    <View style={styles.sectionContainer}>
                        <CustomText variant="h2" style={styles.sectionTitle}>Игры</CustomText>

                        {/* Подзаголовок (вводный текст) */}
                        <CustomText variant="secondary" style={styles.subtitle}>
                            По вашему запросу и нашей возможности мы можем загрузить любую из игр, что приобретена на Вашем аккаунте. Steam, Origin, Battle.net и прочих сервисов.
                        </CustomText>

                        {/* Таблица с горизонтальным скроллом */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={true}
                            contentContainerStyle={{ width: innerContainerWidth }}
                        >
                            <View>
                                {/* Заголовки */}
                                <View style={styles.headerRow}>
                                    {headers.map((header, idx) => {
                                        const cellWidth = columnWidths[idx] * factor;
                                        const isLast = idx === columnCount - 1;
                                        return (
                                            <View
                                                key={idx}
                                                style={[
                                                    styles.headerCell,
                                                    { width: cellWidth },
                                                    !isLast && { marginRight: COLUMN_GAP }
                                                ]}
                                            >
                                                <CustomText style={styles.headerText} numberOfLines={1}>
                                                    {header}
                                                </CustomText>
                                            </View>
                                        );
                                    })}
                                </View>

                                {/* Строки данных */}
                                {gamesData.map((game, rowIdx) => (
                                    <View key={rowIdx} style={styles.dataRow}>
                                        <View
                                            style={[
                                                styles.dataCell,
                                                { width: columnWidths[0] * factor },
                                                { marginRight: COLUMN_GAP }
                                            ]}
                                        >
                                            <CustomText style={[styles.dataText, styles.firstColumnText]} numberOfLines={1}>
                                                {game.name}
                                            </CustomText>
                                        </View>
                                        <View
                                            style={[
                                                styles.dataCell,
                                                { width: columnWidths[1] * factor },
                                                { marginRight: COLUMN_GAP }
                                            ]}
                                        >
                                            <CustomText style={styles.dataText} numberOfLines={1}>
                                                {game.client}
                                            </CustomText>
                                        </View>
                                        <View
                                            style={[
                                                styles.dataCell,
                                                { width: columnWidths[2] * factor }
                                            ]}
                                        >
                                            <CustomText style={styles.dataText} numberOfLines={1}>
                                                {game.location}
                                            </CustomText>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </StackScreen>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
    sectionContainer: {
        padding: 16,
        backgroundColor: COLORS.SECTION_BACKGROUND,
        marginBottom: 16,
        borderRadius: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
        color: COLORS.WHITE,
    },
    subtitle: {
        color: COLORS.GRAY,
        fontSize: 13,
        lineHeight: 18,
        marginBottom: 16,
    },
    lastSubtitle: {
        marginBottom: 16,
    },
    headerRow: {
        flexDirection: 'row',
        paddingBottom: 8,
        marginBottom: 4,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.PRIMARY,
    },
    headerCell: {
        paddingHorizontal: 6,
    },
    headerText: {
        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: '600',
    },
    dataRow: {
        flexDirection: 'row',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.DARK_GRAY,
    },
    dataCell: {
        paddingHorizontal: 6,
    },
    dataText: {
        color: COLORS.WHITE,
        fontSize: 12,
    },
    firstColumnText: {
        color: COLORS.PRIMARY,
        fontWeight: '500',
    },
});