import dayjs from 'dayjs'
import 'dayjs/locale/es'


dayjs.locale('es')
dayjs().locale('es').format('MMMM D, YYYY')


const now = dayjs();

let message = '';

export function humanizarFecha(fecha) {
    fecha = dayjs(fecha);
    console.log(fecha)
    const diffMinutes = now.diff(fecha, 'minutes');
    const diffHours = now.diff(fecha, 'hours');
    const diffDays = now.diff(fecha, 'days');
    if (diffDays < 30) {
        if (diffDays < 1) {
            if (diffMinutes < 60) {
                message = `Hace ${diffMinutes} minutos`;
            } else if (diffHours < 24) {
                message = `Hace ${diffHours} horas`;
            }
        } else {
            if (diffDays === 1) {
                message = `Hace ${diffDays} día`;
            } else {
                message = `Hace ${diffDays} días`;
            }
        }
    } else if (diffDays > 30 && diffDays < 365) {
        message = fecha.format('MMMM DD');

    } else {
        message = fecha.format('MMMM DD, YYYY');
    }

    return message;

}


