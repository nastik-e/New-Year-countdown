class TimeAdapter {
  private static secInMin: number = 60;
  private static secInHour: number = 3600;
  private static secInDay: number = 86400;
  private static minInHour: number = 60;
  private static hoursInDay: number = 24;
  private static daysInMonth: number = 31;

  static secondsLeft(sec: number): string {
    return TimeAdapter.fixTextFormat(sec % TimeAdapter.secInMin);
  }
  static minutesLeft(sec: number): string {
   return TimeAdapter.fixTextFormat(Math.floor(sec / TimeAdapter.secInMin) % TimeAdapter.minInHour)
  }
  static hoursLeft(sec: number): string {
    return TimeAdapter.fixTextFormat( Math.floor(sec / TimeAdapter.secInHour) % TimeAdapter.hoursInDay);
  }
  static daysLeft(sec: number): string {
    return TimeAdapter.fixTextFormat(Math.floor(sec / TimeAdapter.secInDay) % TimeAdapter.daysInMonth);
  }
  static fixTextFormat(digit:number):string {
    return digit < 10 ? "0"+digit : digit.toString();
  } 

}
export default TimeAdapter;