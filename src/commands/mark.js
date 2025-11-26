import chalk from "chalk";
import fs from "fs";
import path from "path";

import { readTasksFromJson, writeTasksToJson } from "../utils/json.utils.js";

export const markCommand = (status, id) => {
  const validStatuses = ["done", "in-progress"];
  if (!validStatuses.includes(status)) {
    console.log(
      chalk.red(
        `Error: Stato non valido. Usare uno dei seguenti stati: ${validStatuses.join(
          ", ",
        )}.`,
      ),
    );
    return;
  }

  // leggere i task esistenti
  const tasks = readTasksFromJson();

  // trovare il task da aggiornare
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    console.log(chalk.red(`Error: Nessun task trovato con ID: ${id}.`));
    return;
  }

  // aggiornare lo stato e la data di aggiornamento del task
  tasks[taskIndex].status = status;
  tasks[taskIndex].updatedAt = new Date();
  // salvare i task aggiornati
  writeTasksToJson(tasks);
  console.log(
    chalk.green(`Task con ID: ${id} marcato come '${status}' con successo.`),
  );
};
