import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("examples", "main", {
  preVersionBumpScripts: ["UPDATE_RECURSIVE", "PRUNE"],
  postVersionBumpScripts: ["DEDUPE"],
  isLibrary: false,
});
