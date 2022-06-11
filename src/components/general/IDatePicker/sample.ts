import moment from "moment-jalaali";
const datePickerSampleObject = [
  {
    yearName: "",
    startDate: moment(),
    endDate: moment(),
    months: [
      {
        monthName: "",
        startDate: moment(),
        endDate: moment(),
        days: [moment()],
      },
    ],
  },
];

export default datePickerSampleObject;
