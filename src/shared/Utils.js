import moment from "moment";

export const ConvertTimestampToDate = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  return date.toLocaleDateString("en-DE");
};

export const ConvertDateToTimestamp = (date) => {
  var dateToConvert = date;
  dateToConvert = dateToConvert.split("-");
var newDate = new Date( dateToConvert[2], dateToConvert[1] - 1, dateToConvert[0]);
console.log(newDate.getTime())
};

export const TimestampToDate = (timestamp) => {
  return moment.unix(timestamp).format("MM/DD/YYYY");
}

export const DateToTimestamp = (date) => {
  return moment(date).unix();
}