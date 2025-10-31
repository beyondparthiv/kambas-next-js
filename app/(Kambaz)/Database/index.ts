// app/(Kambaz)/Database/index.ts
import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import enrollments from "./enrollments.json";

export { courses, modules, assignments, users, enrollments };

// Default export for textbook-style `import db from "../Database"`
export default { courses, modules, assignments, users, enrollments };
