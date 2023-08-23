import * as shell from "shelljs";
// Copy all the view templates and assets in the public folder
shell.cp("-R", ["src/views", "src/public"], "build/src");

// Remove unnecessary files
shell.rm(["build/src/public/js/*.ts", "build/src/public/js/*.json"]);
