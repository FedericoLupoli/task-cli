import chalk from "chalk";
import { readTasksFromJson, writeTasksToJson } from "../utils/json.utils.js";

export const addCommand = (description) => {
  // returnare un messaggio di errore se la descrizione è vuota
  if (!description || description.trim() === "") {
    console.log(
      chalk.red("Error: Inserire una descrizione valida per il task."),
    );
    return;
  }

  // leggere i task esistenti
  const tasks = readTasksFromJson();
  const newTaskId =
    tasks.length > 0 ? String(Number(tasks[tasks.length - 1].id) + 1) : "1";

  // creare il nuovo task
  const newTask = {
    id: newTaskId,
    description: description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // salvare il nuovo task
  tasks.push(newTask);
  writeTasksToJson(tasks);

  console.log(chalk.green(`Task aggiunto con successo (ID: ${newTaskId})`));
};
