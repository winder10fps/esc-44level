import { StyleSheet, View } from 'react-native';
import StackScreen from '@/components/StackScreen';
import CustomText from '@/components/CustomText';


export default function PrivacyScreen() {
    return (
        <StackScreen title='Политика конфиденциальности'>
            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>1. Общие положения</CustomText>
                <CustomText style={styles.blockText}>1.1. Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты Обществом с ограниченной ответственностью «ЭСК 44ЛЕВЕЛ» (далее — «Оператор») персональных данных пользователей (далее — «Пользователи»), получаемых при использовании компьютерного клуба «ESC 44LEVEL» и связанных с ним услуг.</CustomText>
                <CustomText style={styles.blockText}>1.2. Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и иными нормативными правовыми актами Российской Федерации в области защиты персональных данных.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>2. Категории обрабатываемых данных</CustomText>
                <CustomText style={styles.blockText}>2.1. Оператор обрабатывает следующие категории персональных данных: фамилию, имя, отчество, дату рождения, данные документа, удостоверяющего личность, номер мобильного телефона, адрес электронной почты, реквизиты банковской карты (последние 4 цифры), историю платежей.</CustomText>
                <CustomText style={styles.blockText}>2.2. Также обрабатываются технические данные: IP-адрес, тип устройства, данные файлов cookie, история посещений, статистика игровых сессий, накопленные баллы уровня, настройки оборудования.</CustomText>
                <CustomText style={styles.blockText}>2.3. Специальные категории персональных данных (раса, национальность, политические взгляды, религиозные убеждения, состояние здоровья) не обрабатываются.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>3. Цели обработки данных</CustomText>
                <CustomText style={styles.blockText}>3.1. Персональные данные обрабатываются для заключения и исполнения договора оказания услуг, идентификации Пользователя при посещении клуба, обеспечения работы системы уровней и начисления бонусов.</CustomText>
                <CustomText style={styles.blockText}>3.2. Также данные используются для обработки платежей, формирования финансовой отчетности, информирования о новых услугах, акциях и турнирах (при наличии согласия), улучшения качества предоставляемых услуг и выполнения требований законодательства.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>4. Правовые основания обработки</CustomText>
                <CustomText style={styles.blockText}>4.1. Обработка осуществляется на основании согласия субъекта персональных данных, заключения и исполнения договора, выполнения обязанностей, возложенных на Оператора законодательством, а также осуществления прав и законных интересов Оператора.</CustomText>
                <CustomText style={styles.blockText}>4.2. Согласие на обработку персональных данных предоставляется Пользователем при регистрации в клубе и является неотъемлемой частью договора оказания услуг.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>5. Порядок обработки данных</CustomText>
                <CustomText style={styles.blockText}>5.1. Обработка персональных данных осуществляется как с использованием средств автоматизации, так и без их использования.</CustomText>
                <CustomText style={styles.blockText}>5.2. Оператор принимает необходимые организационные и технические меры для защиты данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения.</CustomText>
                <CustomText style={styles.blockText}>5.3. Хранение данных осуществляется в форме, позволяющей идентифицировать субъекта персональных данных, не дольше, чем этого требуют цели обработки.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>6. Передача данных третьим лицам</CustomText>
                <CustomText style={styles.blockText}>6.1. Оператор может передавать персональные данные платежным системам для осуществления транзакций, государственным органам в случаях, предусмотренных законодательством, партнерам для организации совместных турниров (с согласия Пользователя) и субподрядчикам, оказывающим услуги по технической поддержке.</CustomText>
                <CustomText style={styles.blockText}>6.2. При передаче данных Оператор требует от третьих лиц соблюдения конфиденциальности и обеспечения безопасности передаваемых данных.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>7. Международная передача данных</CustomText>
                <CustomText style={styles.blockText}>7.1. Оператор не осуществляет трансграничную передачу персональных данных на территорию иностранных государств, не обеспечивающих адекватную защиту прав субъектов персональных данных.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>8. Права Пользователя</CustomText>
                <CustomText style={styles.blockText}>8.1. Пользователь имеет право на получение информации об обработке его персональных данных, доступ к своим данным и их уточнение, блокирование или уничтожение данных в случае их неполноты, устаревания, неточности, отзыв согласия на обработку.</CustomText>
                <CustomText style={styles.blockText}>8.2. Для реализации своих прав Пользователь может направить запрос по адресу электронной почты: privacy@esc44level.ru или почтовому адресу: [юридический адрес Оператора].</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>9. Использование файлов cookie</CustomText>
                <CustomText style={styles.blockText}>9.1. Веб-сайт и приложение Оператора используют файлы cookie для авторизации Пользователя, сохранения настроек и предпочтений, сбора статистики посещаемости и обеспечения безопасности.</CustomText>
                <CustomText style={styles.blockText}>9.2. Пользователь может отключить использование файлов cookie в настройках браузера, однако это может повлиять на функциональность сервиса.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>10. Обработка данных несовершеннолетних</CustomText>
                <CustomText style={styles.blockText}>10.1. Услуги Оператора не предназначены для лиц младше 14 лет.</CustomText>
                <CustomText style={styles.blockText}>10.2. Обработка персональных данных несовершеннолетних в возрасте от 14 до 18 лет осуществляется с согласия их законных представителей.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>11. Сроки хранения данных</CustomText>
                <CustomText style={styles.blockText}>11.1. Персональные данные хранятся в течение срока действия договора оказания услуг и в течение 5 лет после его прекращения (в соответствии с требованиями налогового законодательства).</CustomText>
                <CustomText style={styles.blockText}>11.2. После достижения целей обработки или отзыва согласия данные подлежат уничтожению или обезличиванию.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>12. Безопасность данных</CustomText>
                <CustomText style={styles.blockText}>12.1. Оператор применяет следующие меры безопасности: шифрование передаваемых данных по протоколу TLS, регулярное обновление программного обеспечения, разграничение прав доступа сотрудников, резервное копирование данных, физическую защиту серверов.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>13. Обновление Политики</CustomText>
                <CustomText style={styles.blockText}>13.1. Оператор оставляет за собой право вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента ее размещения на сайте и в приложении.</CustomText>
                <CustomText style={styles.blockText}>13.2. Пользователи будут уведомлены об изменениях Политики через приложение или по электронной почте.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>14. Контактная информация</CustomText>
                <CustomText style={styles.blockText}>14.1. По вопросам обработки персональных данных обращаться: ООО «ЭСК 44ЛЕВЕЛ», ИНН: [указать ИНН], ОГРН: [указать ОГРН], юридический адрес: [указать адрес], email: privacy@esc44level.ru, телефон: +7 (XXX) XXX-XX-44.</CustomText>
            </View>

            <View style={styles.block}>
                <CustomText variant='h3' style={styles.blockHeading}>15. Заключительные положения</CustomText>
                <CustomText style={styles.blockText}>15.1. Использование услуг клуба означает согласие с положениями настоящей Политики.</CustomText>
                <CustomText style={styles.blockText}>15.2. В случае несогласия с условиями Политики Пользователь должен прекратить использование услуг Оператора.</CustomText>
                <CustomText style={styles.blockText}>15.3. Настоящая Политика является публичным документом и доступна на сайте esc44level.ru и в мобильном приложении.</CustomText>
            </View>
            <View style={styles.block}>
                <CustomText style={styles.blockText}>Дата последнего обновления: 01 января 2222 года. Версия: 1.0</CustomText>
            </View>
        </StackScreen >
    );
}


const styles = StyleSheet.create({
    block: {
        marginVertical: 24,
    },
    blockHeading: {
        marginBottom: 8
    },
    blockText: {
        marginBottom: 4,
    }
});