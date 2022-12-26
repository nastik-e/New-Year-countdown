import TimeAdapter from "./TimeAdapter";
class ObserverCountdown {
  id: number;
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
  root: HTMLDivElement;
  countdownContainer: HTMLDivElement;
  constructor(root: HTMLDivElement) {
    this.root = root;
    this.root.textContent = "Celebrate New Year in:";
    this.countdownContainer = document.createElement("div");
    this.countdownContainer.classList.add('countdownContainer')
    this.root.appendChild(this.countdownContainer);
  }

  update(totalSeconds: number): void {
    this.seconds = TimeAdapter.secondsLeft(totalSeconds);
    this.minutes = TimeAdapter.minutesLeft(totalSeconds);
    this.hours = TimeAdapter.hoursLeft(totalSeconds);
    this.days = TimeAdapter.daysLeft(totalSeconds);
    this.render();
  }
  render(): void {
    this.countdownContainer.innerHTML = `${this.days}d : ${this.hours}h : ${this.minutes}m : ${this.seconds}s`;
  }
}

export default ObserverCountdown;
