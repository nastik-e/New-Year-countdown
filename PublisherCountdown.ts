import Countdown from "./Countdown";
// interface NewYear {
//   weeks: number;
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

interface Observer {
  id: number;
  update: (seconds:number)=>void;
}

class PublisherCountdown extends Countdown {
  seconds: number;
  observers: Observer[];
  constructor(date:Date) {
    super (date)
    this.observers = [];
  }
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  deleteObserver(observerId: number): void {
    this.observers.filter((el) => {
      el.id !== observerId;
    });
  }
  notify(): void {
    this.observers.forEach((el) => {
      el.update(this.totalSec);
    });

  }
  startCountdown(): void {
    this.intervalId = setInterval(() => {
      this.notify();
      if (this.totalSec === 0) {
        this.stopCountdown();
      }
      this.totalSec--;
    }, 1000);
  }
}



export default PublisherCountdown;
