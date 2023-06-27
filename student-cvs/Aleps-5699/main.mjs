import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
import updateLocale from "dayjs/plugin/updateLocale.js"
import localeObject from "dayjs/locale/es.js"

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.locale(localeObject);//Cargar el idioma español

dayjs.updateLocale('es', {// Edición del archivo "es.js" para cambiar las capitales
    months : ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    relativeTime:{future:"En %s",past:"Hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"}
  })

  function humanizarFecha(date){
    const fecha = dayjs(date);
    const ahora = dayjs();
    const diferencia = ahora.diff(fecha, "month");//Obtiene la diferencia de fechas por meses
    
    if(diferencia >= 12){// Si la diferencia es igual o mayor a 12 meses (un año)
      return "[" + date + "] " + fecha.format('MMMM D, YYYY');
  
    }else if(diferencia >= 1){// Si la diferencia es igual o mayor a un mes
      return "[" + date + "] " + fecha.format('MMMM D');
  
    }else if(diferencia < 1){// Si la diferencia es menor a un mes
      return "[" + date + "] " + fecha.fromNow();
    }
  }

console.log(humanizarFecha("2021-03-01"));
console.log(humanizarFecha("2023-02-02"));
console.log(humanizarFecha("2023-06-28"));

function  handleSubmit (event) {
    event.preventDefault();
    console.log ("Tu respuesta ha sido enviada")
    alert ("Tu comentario ha sido enviado correctamente");
    $form.reset();
}

const $form = document.querySelector("form");
$form.addEventListener("submit" , handleSubmit);