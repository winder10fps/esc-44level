import CustomText from '@/components/CustomText';
import StackScreen from '@/components/StackScreen';
import { COLORS } from '@/constants/ui';
import { useUpdateTabs } from '@/hooks/useUpdateTabs';
import { FlatList, ListRenderItem, RefreshControl, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

interface PriceItem {
    id: string;
    title: string;
    subtitle?: string;
    headers: string[];
    widths: number[];          // базовые ширины колонок (без учёта отступов)
    lines: { [key: string]: string }[];
}

const pricesData: PriceItem[] = [
    {
        id: '1',
        title: 'ПК / ВРЕМЯ',
        subtitle: '* Дневной сеанс с 10:00 до 21:00   Ночной сеанс с 21:00 до 07:00',
        headers: ['Линия', 'Класс', '1 ЧАС', 'ДЕНЬ*', 'НОЧЬ* 18+', 'Мониторы'],
        widths: [90, 80, 60, 60, 70, 130],
        lines: [
            { line: 'LINE-1', class: 'Econom', hour: '90', day: '650', night: '400', monitor: '24" 144гц' },
            { line: 'LINE-2', class: 'Standard', hour: '100', day: '700', night: '450', monitor: '27" 240гц' },
            { line: 'LINE-3', class: 'Standard+', hour: '110', day: '750', night: '500', monitor: '32" 2K 165гц' },
            { line: 'LINE-4', class: 'Bootcamp', hour: '120', day: '800', night: '600', monitor: '24" 300гц' },
            { line: 'LINE-5', class: 'Comfort', hour: '130', day: '900', night: '700', monitor: '24" 300гц' },
            { line: 'LINE-6', class: 'Premium', hour: '140', day: '1000', night: '800', monitor: '27" 320гц' },
            { line: 'LINE-7', class: 'Exclusive', hour: '150', day: '1100', night: '900', monitor: '32" 2K 165гц' },
            { line: 'LINE-8', class: 'De luxe', hour: '160', day: '1200', night: '-', monitor: '24" 300гц' },
            { line: 'LINE-9', class: 'Luxe', hour: '170', day: '1300', night: '-', monitor: '27" 320гц' },
        ]
    },
    {
        id: '2',
        title: 'АКЦИИ PC',
        headers: ['Линия', 'до 12:00', 'до 16:00 и с 21:00'],
        widths: [90, 120, 150],
        lines: [
            { line: 'LINE-1', morning: '5ч = 250₽', evening: '5ч = 350₽' },
            { line: 'LINE-2', morning: '5ч = 300₽', evening: '5ч = 400₽' },
            { line: 'LINE-3', morning: '5ч = 350₽', evening: '5ч = 450₽' },
            { line: 'LINE-4', morning: '5ч = 400₽', evening: '5ч = 500₽' },
            { line: 'LINE-5', morning: '5ч = 450₽', evening: '5ч = 550₽' },
            { line: 'LINE-6', morning: '5ч = 500₽', evening: '5ч = 600₽' },
            { line: 'LINE-7', morning: '5ч = 550₽', evening: '5ч = 650₽' },
            { line: 'LINE-8', morning: '5ч = 600*', evening: '5ч = 700*' },
            { line: 'LINE-9', morning: '5ч = 650*', evening: '5ч = 750*' },
        ]
    },
    {
        id: '3',
        title: 'PLAYSTATION 5 НА ПРОЕКТОРЕ',
        subtitle: '* Экран 130" (330 см) • 5.1 dolby digital',
        headers: ['Игроки', '1 ЧАС'],
        widths: [130, 80],
        lines: [
            { line: '1 ИГРОК', price: '300 ₽' },
            { line: '2 ИГРОКА', price: '300 ₽' },
            { line: '4 ИГРОКА', price: '500 ₽' },
            { line: 'ДОП. ПЕРСОНА', price: '+100 ₽' },
        ]
    },
    {
        id: '4',
        title: 'ВИРТУАЛЬНАЯ РЕАЛЬНОСТЬ HTC VIVE',
        subtitle: '* Предоплата от 1ч • Ночью перерыв 1ч',
        headers: ['', '1 ЧАС', 'НОЧЬ'],
        widths: [120, 80, 100],
        lines: [
            { line: '1 ШЛЕМ', hour: '600 ₽', night: '3000 ₽' },
            { line: '2 ШЛЕМА', hour: '1000 ₽', night: '5000 ₽' },
            { line: 'ДОП. ИГРОК', hour: '+100 ₽', night: '+100 ₽' },
        ]
    },
    {
        id: '5',
        title: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
        headers: ['Линия', 'Процессор', 'Видео', 'RAM', 'Монитор', 'Разреш'],
        widths: [60, 80, 80, 70, 80, 70],
        lines: [
            { line: 'L1', cpu: '11400F', gpu: 'GTX1060', ram: '16GB', monitor: '24"', res: '1080p' },
            { line: 'L2', cpu: '11400F', gpu: '1660S', ram: '16GB', monitor: '27"', res: '1080p' },
            { line: 'L3', cpu: '5600', gpu: 'GTX1070', ram: '16GB', monitor: '32"', res: '2K' },
            { line: 'L4', cpu: '7500f', gpu: '3060Ti', ram: '16GB', monitor: '24"', res: '1080p' },
            { line: 'L5', cpu: '7500f', gpu: '5060', ram: '32GB', monitor: '24"', res: '1080p' },
            { line: 'L6', cpu: '7500f', gpu: '5060', ram: '32GB', monitor: '27"', res: '4K' },
            { line: 'L7', cpu: '12900k', gpu: '4070S', ram: '32GB', monitor: '32"', res: '2K' },
            { line: 'L8', cpu: '7500f', gpu: '5060', ram: '32GB', monitor: '24"', res: '1080p' },
            { line: 'L9', cpu: '7500f', gpu: '4070S', ram: '32GB', monitor: '27"', res: '4K' },
        ]
    }
];

const COLUMN_GAP = 24; // отступ между колонками

export default function PricesScreen() {
    const { refreshing, onRefresh } = useUpdateTabs();
    const { width: screenWidth } = useWindowDimensions();
    const horizontalPadding = 16; // отступы контейнера секции слева и справа
    const availableWidth = screenWidth - horizontalPadding * 2;

    const renderSection: ListRenderItem<PriceItem> = ({ item }) => {
        const columnCount = item.headers.length;
        const totalBaseWidth = item.widths.reduce((sum, w) => sum + w, 0);
        const totalWidthWithGaps = totalBaseWidth + (columnCount - 1) * COLUMN_GAP;

        // Определяем, нужно ли масштабировать колонки, чтобы заполнить экран
        let factor = 1;
        let innerContainerWidth = totalWidthWithGaps;

        if (totalWidthWithGaps <= availableWidth) {
            // Таблица помещается – растягиваем колонки пропорционально, чтобы занять всю ширину
            const availableWithoutGaps = availableWidth - (columnCount - 1) * COLUMN_GAP;
            factor = availableWithoutGaps / totalBaseWidth;
            innerContainerWidth = availableWidth;
        } else {
            // Не помещается – оставляем исходные размеры, включаем скролл
            factor = 1;
            innerContainerWidth = totalWidthWithGaps;
        }

        return (
            <View style={styles.sectionContainer}>
                <CustomText variant="h2" style={styles.sectionTitle}>{item.title}</CustomText>

                {/* Таблица с горизонтальным скроллом (будет активен только если контент шире экрана) */}
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={{ width: innerContainerWidth }}
                >
                    <View>
                        {/* Заголовки */}
                        <View style={styles.headerRow}>
                            {item.headers.map((header, idx) => {
                                const cellWidth = item.widths[idx] * factor;
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
                        {item.lines.map((lineData, rowIdx) => (
                            <View key={rowIdx} style={styles.dataRow}>
                                {Object.values(lineData).map((value, colIdx) => {
                                    const cellWidth = item.widths[colIdx] * factor;
                                    const isLast = colIdx === columnCount - 1;
                                    return (
                                        <View 
                                            key={colIdx} 
                                            style={[
                                                styles.dataCell, 
                                                { width: cellWidth },
                                                !isLast && { marginRight: COLUMN_GAP }
                                            ]}
                                        >
                                            <CustomText 
                                                style={[
                                                    styles.dataText,
                                                    colIdx === 0 && styles.firstColumnText
                                                ]}
                                                numberOfLines={1}
                                            >
                                                {value}
                                            </CustomText>
                                        </View>
                                    );
                                })}
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* Все пояснения – под таблицей */}
                {(item.subtitle) && (
                    <View style={styles.footer}>
                        {item.subtitle && (
                            <CustomText variant="secondary" style={styles.footerText}>
                                {item.subtitle}
                            </CustomText>
                        )}
                    </View>
                )}
            </View>
        );
    };

    return (
        <StackScreen title='Цены и акции' style={{paddingHorizontal: 8}}>
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
                    <FlatList
                        data={pricesData}
                        renderItem={renderSection}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </StackScreen>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        padding: 16,
        backgroundColor: COLORS.CARD_BACKGROUND,
        marginBottom: 24,
        borderRadius: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
        color: COLORS.WHITE,
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
    footer: {
        marginTop: 8,
        
    },
    footerText: {
        color: COLORS.GRAY,
        fontSize: 12,
        lineHeight: 18,
    },
    separator: {
        marginTop: 8,
    },
    listContainer: {
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
});