import chalk from "chalk";
import fs from "fs";
import path from "path";

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

  // controllare se esiste il JSON per il salvataggio dei task
  const jsonFilePath = path.join(process.cwd(), "src/build/tasks.json");
  if (!fs.existsSync(jsonFilePath)) {
    console.log(
      chalk.red(
        "Error: Nessun task trovato. Aggiungere un task prima di aggiornarlo.",
      ),
    );
    return;
  }

  // leggere i task esistenti
  const tasksData = fs.readFileSync(jsonFilePath);
  const tasks = JSON.parse(tasksData);

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
  fs.writeFileSync(jsonFilePath, JSON.stringify(tasks, null, 2));

  console.log(chalk.green(`Task con ID: ${id} aggiornato con successo.`));
};
