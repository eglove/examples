import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("examples", "main", {
  preVersionBumpScripts: ["UPDATE_RECURSIVE", "PRUNE"],
  postVersionBumpScripts: ["DEDUPE", "TURBO_CLEAN", "LINT", "BUILD"],
  isIgnoringBuild: true,
  isIgnoringPeerDependencies: true,
});
