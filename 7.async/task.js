class AlarmClock {
    debugger;
    constructor(){
        this.alarmCollection = []; //коллекция звонков
        this.intervalId = null; // таймер
    }

    // добавляет новый звонок в коллекцию существующих
    addClock(time, callback, canCall) { 
        if (!time  || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.find((element) => time === element.time)){
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({callback, time, canCall: true})
    };

    //удаляет звонки по определённому времени
    removeClock (time){
        // не понимаю что за аргмент. Удаляем время, которое уже сработало?
        this.alarmCollection = this.alarmCollection.filter((element) => time !== element.time)
    }

    //возвращает текущее время в строковом формате 
    getCurrentFormattedTime(){
        let data = new Date();
        let hour = data.getHours();
        let minutes = data.getMinutes();
        return hour + ':'+ (minutes < 10 ? '0' + minutes : minutes);
    }

    //запускает будильник
    start (){
        if (!!this.intervalId){
            return null;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((element) => {
                if (element.time ===  this.getCurrentFormattedTime() && element.canCall === true){
                    element.canCall = false;
                    element.callback();
                }
            })
        }, 1000)
 }

// останавливает выполнение интервала будильника
stop(){
    clearInterval(this.intervalId);
    this.intervalId = null;
}

// сбрасывает возможность запуска всех звонков
resetAllCalls(){
    this.alarmCollection = this.alarmCollection.map((item) => ({...item, canCall: true}))
};


// удаляет все звонки
clearAlarms(){
    this.stop();
    this.alarmCollection = [];
}
}
