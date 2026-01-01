function validateResume(resume) {
    const errors = [];

    if (!resume || typeof resume !== "object") {
        return ["Resume must be an object."];
    }

    if (!resume.header || typeof resume.header !== "object") {
        errors.push("Missing required section: header.");
    } else {
        if (!resume.header.name || resume.header.name.trim().length === 0) {
            errors.push("Header.name is required.");
        } 
        if (!resume.header.email || resume.header.email.trim().length === 0) {
            errors.push("Header.email is required");
        }
    }

    const arraySections = ["education", "experience", "projects", "skills"];
    for (const section of arraySections) {
        if (!Array.isArray(resume[section])) {
            errors.push(`${section} must be an array.`);
        }
    }

    return errors;
}

module.exports = { validateResume };