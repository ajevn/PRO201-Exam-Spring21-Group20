const db = require("../db/mongo");
const reports = db.get("report");

const getPartCountByPartName = async (param) => {
  //reports.count({ parts: { $elemMatch: { partName: param } } });
  return reports.count({ "parts.partName": param });
};
const getPartCountByPartNumber = async (param) => {
  //reports.count({ parts: { $elemMatch: { partNumber: param } } });
  return reports.count({ "parts.partNumber": param });
};

module.exports = { getPartCountByPartName, getPartCountByPartNumber };
