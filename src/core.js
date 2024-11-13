import NepaliDate from "nepali-date";

export function convertToNepaliDate(date) {
  const nepaliDate = new NepaliDate(date);
  return `${nepaliDate.getDate()}-${nepaliDate.getMonth() + 1}-${
    nepaliDate.getYear() + 1900
  }`;
}
