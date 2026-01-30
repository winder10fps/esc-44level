import { StyleSheet, View } from 'react-native';
import StackScreen from '@/components/StackScreen';
import CustomText from '@/components/CustomText';


export default function UserAgreementScreen() {
    return (
        <StackScreen title='Пользовательское соглашение'>
            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>1. Общие положения</CustomText>
                <CustomText style={styles.blockText}>1.1. Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между компьютерным клубом «[Название Клуба]» (далее — «Администрация»), в лице [должность, ФИО], действующего на основании [Устава/Положения], и посетителем (клиентом) компьютерного клуба (далее — «Пользователь»).</CustomText>
                <CustomText style={styles.blockText}>1.2. Факт посещения компьютерного клуба и начала использования компьютерного оборудования, программного обеспечения, доступа в интернет и иных услуг (далее — «Услуги») означает полное и безоговорочное принятие Пользователем условий настоящего Соглашения.</CustomText>
                <CustomText style={styles.blockText}>1.3. Администрация оставляет за собой право в одностороннем порядке изменять условия настоящего Соглашения. Актуальная версия Соглашения всегда размещена на официальном сайте клуба и на стойке администратора.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>2. Права и обязанности Пользователя</CustomText>
                <CustomText style={styles.blockText}>2.1. Пользователь обязан:</CustomText>
                <CustomText style={styles.blockText}>• Соблюдать правила техники безопасности, общественного порядка и нормы законодательства РФ.</CustomText>
                <CustomText style={styles.blockText}>• Бережно относиться к имуществу Администрации (компьютеры, мониторы, периферийные устройства, мебель, оборудование).</CustomText>
                <CustomText style={styles.blockText}>• Не предпринимать попыток самостоятельного ремонта, отключения, перезагрузки или изменения конфигурации оборудования без разрешения Администрации.</CustomText>
                <CustomText style={styles.blockText}>• Не устанавливать, не копировать и не удалять любое программное обеспечение на компьютерах клуба.</CustomText>
                <CustomText style={styles.blockText}>• Не использовать оборудование клуба для:</CustomText>
                <CustomText style={styles.blockText}>  - Распространения и просмотра материалов экстремистского, порнографического характера, а также материалов, пропагандирующих насилие и наркотики.</CustomText>
                <CustomText style={styles.blockText}>  - Доступа к ресурсам, нарушающим законодательство РФ (включая нелецензионный контент).</CustomText>
                <CustomText style={styles.blockText}>  - Взлома, хакерских атак, рассылки спама и иной противоправной деятельности.</CustomText>
                <CustomText style={styles.blockText}>  - Азартных игр на деньги.</CustomText>
                <CustomText style={styles.blockText}>• Своевременно оплачивать оказанные Услуги в соответствии с действующим прейскурантом.</CustomText>
                <CustomText style={styles.blockText}>• Немедленно сообщать администратору о любых неисправностях оборудования или программного обеспечения.</CustomText>
                <CustomText style={styles.blockText}>• Соблюдать чистоту на рабочем месте.</CustomText>
                <CustomText style={styles.blockText}>• Не употреблять алкогольные напитки, наркотические и токсические вещества на территории клуба. Курение разрешено только в специально отведенных местах.</CustomText>
                <CustomText style={styles.blockText}>• Не мешать другим посетителям.</CustomText>
                <CustomText style={styles.blockText}>2.2. Пользователь имеет право:</CustomText>
                <CustomText style={styles.blockText}>• Получать Услуги в соответствии с выбранным тарифом.</CustomText>
                <CustomText style={styles.blockText}>• Пользоваться оборудованием и программным обеспечением, предоставленным Администрацией.</CustomText>
                <CustomText style={styles.blockText}>• Обращаться к администратору за консультацией по пользованию оборудованием и ПО в рамках, предусмотренных политикой клуба.</CustomText>
                <CustomText style={styles.blockText}>• Покинуть клуб в любое время, предварительно рассчитавшись за оказанные Услуги.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>3. Права и обязанности Администрации</CustomText>
                <CustomText style={styles.blockText}>3.1. Администрация обязана:</CustomText>
                <CustomText style={styles.blockText}>• Предоставить Пользователю рабочее место с исправным оборудованием и базовым пакетом программного обеспечения.</CustomText>
                <CustomText style={styles.blockText}>• Обеспечить доступ в интернет (согласно выбранному тарифу).</CustomText>
                <CustomText style={styles.blockText}>• Обеспечивать конфиденциальность персональных данных Пользователя (если они предоставлены).</CustomText>
                <CustomText style={styles.blockText}>• Оказывать техническую поддержку в рамках, установленных политикой клуба.</CustomText>
                <CustomText style={styles.blockText}>3.2. Администрация имеет право:</CustomText>
                <CustomText style={styles.blockText}>• В любое время осуществлять контроль за использованием Пользователем оборудования и ПО.</CustomText>
                <CustomText style={styles.blockText}>• В одностороннем порядке прекратить оказание Услуг Пользователю и потребовать покинуть территорию клуба без возмещения оплаты в случаях:</CustomText>
                <CustomText style={styles.blockText}>  - Нарушения Пользователем условий настоящего Соглашения.</CustomText>
                <CustomText style={styles.blockText}>  - Проявления агрессии, неадекватного поведения, состояния алкогольного или наркотического опьянения.</CustomText>
                <CustomText style={styles.blockText}>  - Порчи имущества Администрации.</CustomText>
                <CustomText style={styles.blockText}>  - Совершения противоправных действий.</CustomText>
                <CustomText style={styles.blockText}>• Взимать с Пользователя полную стоимость причиненного ущерба имуществу Администрации по действующим ценам.</CustomText>
                <CustomText style={styles.blockText}>• Блокировать доступ к определенным интернет-ресурсам и онлайн-сервисам по своему усмотрению.</CustomText>
                <CustomText style={styles.blockText}>• Изменять тарифы, график работы и перечень предоставляемых Услуг, предварительно уведомив Пользователей путем размещения информации на видном месте в клубе и на сайте.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>4. Порядок расчетов и ответственность</CustomText>
                <CustomText style={styles.blockText}>4.1. Оплата Услуг производится по тарифам, действующим на момент оказания Услуг. Минимальная единица тарификации — 1 (один) час.</CustomText>
                <CustomText style={styles.blockText}>4.2. Оплата может производиться авансовым платежом или по факту оказания Услуг.</CustomText>
                <CustomText style={styles.blockText}>4.3. Администрация не несет ответственности:</CustomText>
                <CustomText style={styles.blockText}>• За потерю данных Пользователя, сохраненных на жестких дисках компьютеров клуба. Пользователь обязан сохранять важные данные на собственные носители.</CustomText>
                <CustomText style={styles.blockText}>• За неполадки в работе интернета, вызванные действиями провайдера или обстоятельствами непреодолимой силы.</CustomText>
                <CustomText style={styles.blockText}>• За возможный моральный или материальный ущерб, возникший в результате использования или невозможности использования Услуг клуба.</CustomText>
                <CustomText style={styles.blockText}>• За сохранность личных вещей Пользователя. Администрация рекомендует не оставлять ценные вещи без присмотра.</CustomText>
                <CustomText style={styles.blockText}>4.4. Пользователь несет полную материальную ответственность за любой ущерб, причиненный имуществу Администрации по его вине (включая, но не ограничиваясь: повреждение монитора, клавиатуры, мыши, наушников, кресла, стола).</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>5. Прочие условия</CustomText>
                <CustomText style={styles.blockText}>5.1. Настоящее Соглашение вступает в силу с момента начала использования Пользователем Услуг клуба и действует до полного исполнения обязательств сторонами.</CustomText>
                <CustomText style={styles.blockText}>5.2. Все споры и разногласия решаются путем переговоров. В случае недостижения согласия, спор подлежит разрешению в судебном порядке по месту нахождения Администрации.</CustomText>
                <CustomText style={styles.blockText}>5.3. Администрация не предоставляет Услуги лицам, не достигшим 14 лет. Лица в возрасте от 14 до 18 лет могут пользоваться Услугами только с письменного разрешения родителей или законных представителей, которое должно быть предоставлено Администрации.</CustomText>
            </View>
        </StackScreen>
    );
}


const styles = StyleSheet.create({
    block: {
        marginVertical: 24
    },
    blockHeading: {
        marginBottom: 8
    },
    blockText: {
        marginBottom: 4
    }
});