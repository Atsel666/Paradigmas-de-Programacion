//Funcion Principal que inicia todo.

function tableTimer (tableID){
    var stopTime = true;
    var hr = 0;
    var min = 0;
    var sec = 0;
    var date = new Date();
    let timer = document.getElementById("stopwatch" + tableID);
    let start = document.getElementById("start" + tableID);
    let end = document.getElementById("end" + tableID);
    let total = document.getElementById("total" + tableID);
    let changingTable = document.getElementById(tableID);

    //Este "if" inicia todo el show.
    if (changingTable.src.match('MesaGris.png')){
        changingTable.src = "MesaVerde.png";
        stopTime = false;
        start.innerHTML = 'Inicio: ' + date.getHours() + ':' + date.getMinutes();
        end.innerHTML = 'Fin: En progreso';
        total.innerHTML = 'Total: 0.00';
        timerCycle(timer, hr, min, sec, stopTime, total);
    }
    //Este "else" detiene todo el show.
    else {
        changingTable.src = "MesaGris.png";
        end.innerHTML = 'Fin: '  + date.getHours() + ':' + date.getMinutes();
        stopTime = true;
    }
}

//Funcion para cronometrar el progreso del tiempo para las mesas de bilar
const timerCycle = (timer, hr, min, sec, stopTime, total) => {
    if (stopTime == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        //Cada 60 segundos se aumentan los minutos.
        if (sec == 60){
            min = min + 1;
            sec = 0;
            calcPrice(min, total);
        }

        //Cada 60 minutos se aumentan las horas.
        if (min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        //Los tres "if" siguientes son para añadir un '0' al cronometro
        //cuando se es menor a 10.
        if (sec < 10 || sec == 0){
            sec = '0' + sec;
        }
        
        if (min < 10 || min == 0){
            min = '0' + min;
        }

        if (hr < 10 || hr == 0){
            hr = '0' + hr;
        }

        //Aqui se muestra el cronometro actualizado.
        timer.innerHTML = hr + ':' + min + ':' + sec;
        //Aqui se realiza la llamada recursiva a la misma funcion para el cronometro
        //se utiliza una funcion anonima para que se puedanpasar los parametros.
        setTimeout(function(){timerCycle(timer, hr, min , sec, stopTime, total)}, 1000);
    }
}
//Esta funcion calcula el precio y lo actualiza cada minuto.
const calcPrice = (min, total) =>{
    var price = min * 0.83;

    total.innerHTML = 'Total: ' + price + '$';
}