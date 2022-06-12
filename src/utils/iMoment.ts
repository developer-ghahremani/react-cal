import moment, { Moment } from "moment-jalaali";
/**
 *
 * @param d - string persin day with this foemat jYYYY/jMM/jDD
 * @returns
 */
export const getPersianMoment = (d: string): Moment => {
  const m = moment(d, "jYYYY/jMM/jDD");
  // m.locale("fa", null);
  return m;
};
