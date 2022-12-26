class Countdown {
  finalDate: Date;
  currentDate: Date;
  totalSec: number;
  intervalId: number;
  sec: number;
  min: number;
  hours: number;
  days: number;
  months: number;
  constructor(date: Date) {
    this.finalDate = date;
    this.currentDate = new Date();
    this.totalSec = Math.floor(
      (this.finalDate.getTime() - this.currentDate.getTime()) / 1000
    );
  }
  startCountdown(): void {
    this.intervalId = setInterval(() => {
      if (this.totalSec === 0) {
        this.stopCountdown();
      }
      this.totalSec--;
    }, 1000);
  }
  stopCountdown(): void {
    clearInterval(this.intervalId);
  }
}

export default Countdown;
