const resume = require("./resume")
const { validateResume } = require("./validate");

resume.header.name = "Jane Doe";
resume.header.email = "jane@example.com";

const errors = validateResume(resume);

if (errors.length === 0) {
    console.log("Validation: PASS");
} else {
    console.log("Validation: FAIL");
    for (const err of errors) console.log("-", err);
}