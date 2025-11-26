import chalk from "chalk";
import { readTasksFromJson, writeTasksToJson } from "../utils/json.utils.js";

export const deleteCommand = (id) => {
  // leggere i task esistenti
  const tasks = readTasksFromJson();

  // trovare l'indice del task da eliminare
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    console.log(chalk.red(`Error: Task con ID ${id} non trovato.`));
    return;
  }

  // rimuovere il task
  tasks.splice(taskIndex, 1);
  writeTasksToJson(tasks);
  console.log(chalk.green(`Task con ID ${id} eliminato con successo.`));
};
