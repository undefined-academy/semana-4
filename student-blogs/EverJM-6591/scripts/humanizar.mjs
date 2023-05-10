import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(relativeTime);
dayjs.extend(weekOfYear);

const today = dayjs();
/*console.log(today.format("YYYY/MMMM/DD HH:mm:ss"));*/

/*const example2 = today.add(5, "months").format("MMMM");
console.log(example2);

const example3 = today.subtract(3, "hours").format("DD HH:mm:ss");
console.log(example3);*/

function showHumanDate(myDate){
    const aux = dayjs(myDate);
    console.log(aux.format("YYYY/MM/DD HH:mm:ss"));
    console.log("----------------------------------");
    if(aux.year() === today.year()){
        if(aux.month() === today.month()){
            if(aux.week() === today.week()){
                if(aux.date() === today.date()){
                    if(aux.hour() === today.hour()){
                        if(aux.minute() != today.minute()){
                            const diffMinutes = today.minute() - aux.minute();
                            console.log(`Hace ${diffMinutes} minutos`);
                        }
                    }else{
                        const diffHours = today.hour() - aux.hour();
                        console.log(`Hace ${diffHours} Horas`); 
                    }
                }else{
                    const diffDays = today.date() - aux.date();
                    console.log(`Hace ${diffDays} Día(s)`); 
                }
            }else{
                const diffWeek = today.week() - aux.week();
                console.log(`Hace ${diffWeek} Semana(s)`); 
            } 
        }else if(aux.month() < today.month()){
            const myMonth = aux.format("MMMM");
            const myDay = aux.format("DD");
            console.log(`${myMonth} ${myDay}`);
        }
    }else if(aux.year() < today.year()){
        const myMonth = aux.format("MMMM");
        const myDay = aux.format("DD");
        const myYear = aux.format("YYYY");
        console.log(`${myMonth} ${myDay}, ${myYear}`);
    }
    
}

showHumanDate('2022/03/01 18:01:36');
