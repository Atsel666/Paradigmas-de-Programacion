//Axel Rivas Guillen - 329830

const comprarCasco = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("El casco a sido comprado");
        }, 1000)
    })
}

const comprarGuantes = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Los guantes han sido comprados");
        }, 2000)
    })
}

const pasearEnBici = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("YUPIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
        }, 8000)
    })
}

const toDo = async () => {
    const casco = await comprarCasco();
    const guantes = await comprarGuantes();
    const paseo = await pasearEnBici();
    return ([casco,guantes,paseo]);
}

toDo().then(res => console.log(res));