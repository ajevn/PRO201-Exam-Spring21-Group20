const db = require("../db/mongo");
const reports = db.get("report");

const getPartCountByPartName = async (param) => {
  return await reports.count({ "parts.partName": param });
};

const getPartCountByPartNumber = async (param) => {
  return await reports.count({ "parts.partNumber": param });
};

const getPartsByPartName = async (param) => {
  return await reports.find({ "parts.partName": param });
};

const getPartsByPartNumber = async (param) => {
  return await reports.find({ "parts.partNumber": param });
};

const getPartsByCamp = async (param) => {
  return await reports.find({ campName: param });
};

const getPartsCountArray = async () => {
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
  for (const name of names) {
    const data = await getPartCountByPartName(name);
    res.push({ name, count: data });
  }
  return res;
};

const getRepairsCountByMonth = async () => {
  return await reports.aggregate([
    {
      $group: {
        _id: { $substr: ["$createdAt", 2, 5] },
        count: { $sum: 1 },
      },
    },
  ]);
};

const getPartCountByMonth = async () => {
  return await reports.aggregate([
    {
      $group: {
        _id: { $substr: ["$createdAt", 2, 5] },
        count: { $sum: { $size: "$parts" } },
      },
    },
  ]);
};

module.exports = {
  getPartCountByPartName,
  getPartCountByPartNumber,
  getPartCountByMonth,
  getPartsByPartName,
  getPartsByPartNumber,
  getPartsByCamp,
  getRepairsCountByMonth,
  getPartsCountArray,
};
