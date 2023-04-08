import dayjs from "dayjs";  
import relativeTime from "dayjs/plugin/relativeTime.js"


await import("dayjs/locale/es-us.js");


dayjs.locale("es-us")
dayjs.extend(relativeTime)
// para poder usar "fromNow"


console.log(dayjs().format("YYYY-MM-DD"));
function humanize(date){
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));


    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();


    if(!isCurrentYear){
        return wrappedDate.format("MMMM, DD - YYYY");
    } else if(daysDiff <=30){
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MMMM DD")
    }
}


console.log(humanize(Date.now()));//a few seconds ago
console.log(humanize(dayjs().subtract(5, "days")));//5 days ago
console.log(humanize(dayjs().subtract(60, "days")));//January 26
console.log(humanize(dayjs().subtract(500, "days")));//November, 12 - 2021
console.log(humanize(dayjs().add(300, "days")));//January, 21 - 2024









// const today = new Date()
// console.log(today);

// const birthday = new Date("1990-05-10T08:30:00")
// console.log(birthday);

// console.log(today.getFullYear());
// console.log(today.getFullYear());//1990
// console.log(today.getMonth());//4
// console.log(today.getDate()); //10
// console.log(today.getDay()); //4
// console.log(today.getHours())
// console.log(today.getTime())

// ---------------------------------------------------------



// SUMA DE FECHAS 

// const today = new Date()

// const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000 //calculo para sacar milisegundos de 2 dias 
// // console.log(TWO_DAYS_IN_MS);

// const twoDaysLater = new Date(today.getTime() + TWO_DAYS_IN_MS )


// today.getTime() asi se pasa a segundos 
// console.log(twoDaysLater);


// ---------------------------------------------
//                 Diferencia entre 2 dias 

// const yesterday = new Date("2023-04-05")

// const diffInMiliseconds = today.getTime() - yesterday.getTime()

// const ONE_DAY_MS = 24 * 60 * 60 * 1000

// const diffDays = diffInMiliseconds / ONE_DAY_MS

//console.log(diffDays);

// -----------------------------------------------

// const today = dayjs()

// console.log(today.format());

// const birthday = dayjs("1990-05-10");
// console.log(birthday.utc().format());




// const today = dayjs();

// console.log( dayjs("1999-01-01").fromNow());
