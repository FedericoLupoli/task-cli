import chalk from "chalk";
import { readTasksFromJson, writeTasksToJson } from "../utils/json.utils.js";

export const updateCommand = (id, newDescription) => {
  // returnare un messaggio di errore se l'id o la descrizione sono vuoti
  if (!id || id.trim() === "") {
    console.log(chalk.red("Error: Inserire un ID valido per il task."));
    return;
  }
  if (!newDescription || newDescription.trim() === "") {
    console.log(
      chalk.red("Error: Inserire una descrizione valida per il task."),
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

  // aggiornare la descrizione e la data di aggiornamento del task
  tasks[taskIndex].description = newDescription;
  tasks[taskIndex].updatedAt = new Date();

  // salvare i task aggiornati
  writeTasksToJson(tasks);

  console.log(chalk.green(`Task con ID: ${id} aggiornato con successo.`));
};
