import fs from "fs";

export const createData = async (req, res) => {
  const data = req.body;
  const jsonString = JSON.stringify(data);
  const fileName = data.login ? data.login : data.name;

  // Here goes the logic for saving data to json file
  fs.writeFile(`files/${fileName}.json`, jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
      res.status(201).json(data);
    }
  });
};
