export interface ScheduleDayState {
  date: null | Date | string;
  listSchedule: ScheduleState[];
  loading: boolean;
  error: null | string;
  showPopup: boolean;
  success: string;
}

export interface ScheduleState {
  name: string;
  dateTime: Date;
  amount: number;
}

export interface BookCredential {
  name: string;
  date: Date;
  timing: string;
  email: string;
  amount: number;
}
