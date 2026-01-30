import { StyleSheet, View } from 'react-native';
import StackScreen from '@/components/StackScreen';
import CustomText from '@/components/CustomText';
import { COLORS } from '@/constants/ui';


export default function FAQScreen() {
    return (
        <StackScreen title='Частые вопросы'>
            <CustomText variant='h3' style={styles.headingText}>Общие вопросы</CustomText>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Как попасть в клуб первый раз?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Просто приходите. На ресепшене зарегистрируем, покажем зоны, дадим все инструкции. Регистрация займет 5 минут.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Со скольки лет можно?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    С 16 лет — самостоятельно. С 14 до 16 — только с родителями или взрослыми с 10:00 до 22:00.
                </CustomText>
            </View>
            <CustomText variant='h3' style={styles.headingText}>Бронирование</CustomText>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Как забронировать место?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Через наше приложение. Выбираете конкретный компьютер и время. Бронь действует 7 дней вперед.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Что если опоздать?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Ждем 15 минут от начала брони. Если больше — место освобождается.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Можно ли продлить время?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Да, если компьютер свободен. Продлевайте у администратора или в приложении.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Ночью дороже?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Нет, дешевле. С 23:00 до 10:00 — 300₽/час вместо 450₽.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Можно без брони?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Да, если есть свободные компьютеры. Но вечером и в выходные мест может не быть.
                </CustomText>
            </View>

            <CustomText variant='h3' style={styles.headingText}>Оборудование</CustomText>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Какие компьютеры?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Игровые сборки сборки мощные, тянут все популярные игры на высоких настройках.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Свою периферию можно?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Да, подключайте свою мышку, клавиатуру, наушники. Свободные USB-порты есть.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Какие игры есть?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Все популярные: CS2, Dota 2, Valorant, Apex Legends, Fortnite, Overwatch 2, CoD, PUBG и другие.
                </CustomText>
            </View>

            <CustomText variant='h3' style={styles.headingText}>Оплата и цены</CustomText>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Как оплатить?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    По часам на кассе или пакетами со скидкой в приложении. Принимаем карты и наличные.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Есть скидки?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Да: студентам -15%, именинникам -44%, при покупке от 10 часов — два часа в подарок.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Возврат денег?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Да, за неиспользованное время вернем на карту или дадим ваучер.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Что выгоднее?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Пакеты. 10 часов за 3500₽ вместо 4500₽ по часам.
                </CustomText>
            </View>

            <CustomText variant='h3' style={styles.headingText}>Турниры</CustomText>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Когда турниры?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Каждую неделю мини-турниры, каждый месяц — большие чемпионаты. Расписание в приложении.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Платно участвовать?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Мини-турниры часто бесплатные. Большие чемпионаты — взнос 500-2000₽.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Можно командой?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Да, регистрируйте команду из 5 человек. Есть скидка на участие.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Какие призы?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Деньги (до 50,000₽), техника, игровые аксессуары, бесплатные часы в клубе.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Где информация?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    В приложении, Telegram-канале и на стойке администратора.
                </CustomText>
            </View>

            <CustomText variant='h3' style={styles.headingText}>Правила и комфорт</CustomText>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Еду можно приносить?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Да. Есть кухня с микроволновкой, холодильником, чайником.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Что нельзя делать?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Кричать, ругаться, мешать другим, портить оборудование, распивать алкоголь.
                </CustomText>
            </View>
            <View style={styles.questionContainer}>
                <CustomText variant='primary'>Есть охрана?</CustomText>
                <CustomText variant='secondary' style={styles.answerText}>
                    Да, круглосуточная охрана и видеонаблюдение во всех залах.
                </CustomText>
            </View>
        </StackScreen>
    );
}


const styles = StyleSheet.create({
    questionContainer: {
        backgroundColor: COLORS.SECTION_BACKGROUND,
        marginVertical: 8,
        gap: 8,
        padding: 16,
        borderRadius: 8
    },
    answerText: {
        color: COLORS.GRAY
    },
    headingText: {
        marginLeft: 8,
        marginTop: 24,
    }
});