/*
Axel Rivas Guillen - 329830
Act 1 - Levantarse - 5 seg.
Act 2 - Tender la cama - 3 seg.
Act 3 - Bañarse - 3 seg.
Act 4 - Tomar clase - 5 seg.
Act 5 - Desayunar - 8 seg.
Act 6 - Jugar - 10 seg.
*/

const scheduler = (task, length, callback) => {
    setTimeout(() => {
        callback(task)
    }, length)
}

scheduler("Levantarse", 5000, (tarea) => {
    console.log(`Realizando la tarea: ${tarea}`)
    scheduler("Tender la cama", 3000, (tarea) => {
        console.log(`Realizando la tarea: ${tarea}`)
        scheduler("Bañarse", 3000, (tarea) => {
            console.log(`Realizando la tarea: ${tarea}`)
            scheduler("Tomar clase", 5000, (tarea) => {
                console.log(`Realizando la tarea: ${tarea}`)
                scheduler("Desayunar", 8000, (tarea) => {
                    console.log(`Realizando la tarea: ${tarea}`)
                    scheduler("Jugar", 10000, (tarea) => {
                        console.log(`Realizando la tarea: ${tarea}`)
                    })
                })
            })
        })
    })
})