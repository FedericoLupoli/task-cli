import chalk from "chalk";
import path from "path";
import fs from "fs";

export const debugCommand = () => {
  console.log(chalk.blue("Debugging Task CLI..."));
  console.log(chalk.yellow(`Current Working Directory: ${process.cwd()}`));
};
