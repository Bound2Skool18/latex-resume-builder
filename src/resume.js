const fs = require("fs");
const path = require("path");

const schemaPath = path.join(__dirname, "..", "resumeSchema.json");
const resumeData = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

module.exports = resumeData;

