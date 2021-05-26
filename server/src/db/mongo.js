const monk = require("monk");
const db = monk(process.env.MONGO_URI || process.env.MONGO_ATLAS_URI);
db.then(() => {
  console.log("connection success");
}).catch((e) => {
  console.error("Error !", e);
});

module.exports = db;
