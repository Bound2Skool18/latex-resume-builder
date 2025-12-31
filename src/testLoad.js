const resume = require("./resume")

resume.header.name = "Jane Doe";
resume.skills.push("Javascript");

console.log("Resume sections: ", Object.keys(resume));
console.log("Name:", resume.header.name);
console.log("Skills:", resume.skills);