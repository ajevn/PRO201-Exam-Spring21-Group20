const db = require("../db/mongo");
const reports = db.get("report");

const getPartsByLastMount = async () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return await reports.find({ createdAt: { $gt: date } });
};
const getPartsByLastDay = async () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return await reports.find({ createdAt: { $gt: date } });
};

const getPartsCountByCamp = async (param) => {
  const names = [
    "Lamp",
    "12V charger",
    "Battery",
    "Power button",
    "Light bulb",
    "Screen",
    "Socket charger",
    "Solar panel",
  ];
  const res = [];
  for await (const name of names) {
    const data = await reports.count({
      campName: param,
      "parts.partName": name,
    });
    res.push({ name, count: data });
  }
  return res;
};

module.exports = {
  getPartsByLastDay,
  getPartsByLastMount,
  getPartsCountByCamp,
};
