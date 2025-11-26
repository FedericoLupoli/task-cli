import fs from "fs";
import path from "path";
import chalk from "chalk";

export const jsonFilePath = path.join(process.cwd(), "src/build/tasks.json");

export const ensureJsonFileExists = () => {
  if (!fs.existsSync(jsonFilePath)) {
    fs.writeFileSync(jsonFilePath, JSON.stringify([]));
  }
};

export const readTasksFromJson = () => {
  ensureJsonFileExists();
  const tasksData = fs.readFileSync(jsonFilePath);
  return JSON.parse(tasksData);
};

export const writeTasksToJson = (tasks) => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(tasks, null, 2));
};

export const logJsonFilePath = () => {
  console.log(chalk.yellow(`Tasks JSON File Path: ${jsonFilePath}`));
};
