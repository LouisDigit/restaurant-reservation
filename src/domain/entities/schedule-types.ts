export interface ScheduleDayState {
  date: null | Date | string;
  listSchedule: ScheduleState[];
  loading: boolean;
  error: null | string;
  showPopup: boolean;
  success: string | null;
}

export interface ScheduleState {
  name: string;
  date: string;
  amount: number;
  time: string;
  id: string;
}

export interface BookCredential {
  name: string;
  date: Date;
  timing: string;
  email: string;
  amount: number;
}
