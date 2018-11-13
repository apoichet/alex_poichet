export interface SkillTrendApi {
  default: Default;
}

interface Default {
  timelineData: TimelineData[];
}

interface TimelineData {
  time: string;
  formattedTime: string;
  formattedAxisTime: string;
  value: number[];
  formattedValue: number[];
}
