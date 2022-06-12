import moment, { Moment } from "moment-jalaali";
/**
 *
 * @param d - string persin day with this foemat jYYYY/jMM/jDD
 * @returns
 */
export const getPersianMoment = (d: string): Moment => {
  const m = moment(d, "jYYYY/jMM/jDD");
  // m.isoWeek(1).startOf("isoWeeks");
  // m.weekday(-1);
  // m.locale("fa");
  return m;
};
