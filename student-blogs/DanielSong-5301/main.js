
    import dayjs  from "dayjs";
    import relativeTime from "dayjs/plugin/relativeTime.js";
    
    await import ("dayjs/locale/es-us.js");
    
    dayjs.locale("es-us")
    dayjs.extend(relativeTime)
    
    
   // HUMAMIZAR FECHAS 

    dayjs.locale("es-us")
    dayjs.extend(relativeTime)


    function humanize(date){
        const wrappedDate = dayjs(date)
        const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"))

        const añoActual = wrappedDate.year() === new Date().getFullYear();

        if(!añoActual){
            return wrappedDate.format("MMMM DD, YYYY")
        } else if (daysDiff <= 30){
            return wrappedDate.fromNow()
        } else {
            return wrappedDate.format("MMMM DD")
        }
    }

   
    // Fecha humanizada en footer última actualización

    const fechaActual = new Date("2023-04-20")
    const fechaHumanizada = humanize(fechaActual);

    const footer = document.querySelector("footer");

    const fechaElemento = document.createElement('p');
    fechaElemento.textContent = `Sitio Actualizado: ${fechaHumanizada}`;

    footer.appendChild(fechaElemento);
