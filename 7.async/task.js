"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Отсутствует id');
        }

        if (this.alarmCollection.some(clock => clock.id === id)) {
            console.error('Звонок с таким id уже существует');
            return;
        }

        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        const lenghtBeforeRemove = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        return lenghtBeforeRemove !== this.alarmCollection.length;
    };

    // Через findIndex и splice
    //  const indexOfRemoveClock = this.alarmCollection.findIndex(clock => clock.id === id);
    //  if (indexOfRemoveClock !== -1) {
    // 	  this.alarmCollection.splice(indexOfRemoveClock, 1);
    // 	  return true;
    //  }
    //  return false,

    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
        return currentDate;
    }

    start(){
        if (this.timerId){
            return;
        }

        const checkClock = (clock) => {
            if(this.getCurrentFormattedTime() === clock.time){
                clock.callback();
            }
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(checkClock);
        }, 5000);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarm) => console.log(`id: ${alarm.id}, time: ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}