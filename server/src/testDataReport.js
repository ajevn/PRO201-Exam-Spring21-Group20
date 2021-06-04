const productName = `Sunbell`;

//Camp name

const campName = ["Yida", "Pugnido", "Katumba", "Kakuma", "Hagadera"];
//Partname

const partsList = [
  {
    partNumber: "1",
    partName: "Lamp",
  },
  {
    partNumber: "2",
    partName: "12V charger",
  },
  {
    partNumber: "3",
    partName: "Battery",
  },
  {
    partNumber: "4",
    partName: "Power button",
  },
  {
    partNumber: "5",
    partName: "Light bulb",
  },
  {
    partNumber: "6",
    partName: "Screen",
  },
  {
    partNumber: "7",
    partName: "Socket charger",
  },
  {
    partNumber: "8",
    partName: "Solar panel",
  },
];
function randomDate() {
  const date = new Date();
  date.setMonth(Math.floor(Math.random() * 5));
  return date;
}

const fn = () => {
  const body = [];
  for (let i = 0; i < 80; i++) {
    const parts = [];
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    for (let j = 0; j < randomNumber; j++) {
      parts.push(partsList[Math.floor(Math.random() * partsList.length)]);
    }
    const date = randomDate();
    let report = {
      serialNumber: "j" + Math.floor(Math.random() * 1000).toString(),
      productName,
      campName: campName[Math.floor(Math.random() * campName.length)],
      createdAt: date,
      parts,
    };
    body.push(report);
  }
  return body;
};

module.exports = fn;
//TODO sometime there are no serialnumber
