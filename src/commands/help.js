import chalk from "chalk";

export const helpCommand = () => {
  console.log(
    "\n" + chalk.bold.cyan("📋 Task CLI - Available Commands") + "\n",
  );

  console.log(
    chalk.yellow("  help") +
      "                           " +
      chalk.gray("Show this help message"),
  );
  console.log(
    chalk.yellow("  add") +
      "                            " +
      chalk.gray("Add a new task"),
  );
  console.log(
    chalk.yellow("  list") +
      "                           " +
      chalk.gray("List all tasks"),
  );
  console.log(
    chalk.yellow("  list done") +
      "                      " +
      chalk.gray("List completed tasks"),
  );
  console.log(
    chalk.yellow("  list in-progress") +
      "               " +
      chalk.gray("List tasks in progress"),
  );
  console.log(
    chalk.yellow("  list todo") +
      "                      " +
      chalk.gray("List pending tasks"),
  );
  console.log(
    chalk.yellow("  mark done") +
      " " +
      chalk.green("<task_id>") +
      "          " +
      chalk.gray("Mark a task as complete"),
  );
  console.log(
    chalk.yellow("  mark in-progress") +
      " " +
      chalk.green("<task_id>") +
      "   " +
      chalk.gray("Mark a task as in progress"),
  );
  console.log(
    chalk.yellow("  delete") +
      " " +
      chalk.green("<task_id>") +
      "               " +
      chalk.gray("Delete a task"),
  );
  console.log(
    chalk.yellow("  update") +
      " " +
      chalk.green("<task_id>") +
      "               " +
      chalk.gray("Update a task"),
  );
  console.log();
};
