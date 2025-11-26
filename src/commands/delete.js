import chalk from "chalk";
import fs from "fs";
import path from "path";

export const deleteCommand = (id) => {
  // controllare se esiste il JSON per il salvataggio dei task
  const jsonFilePath = path.join(process.cwd(), "src/build/tasks.json");
  if (!fs.existsSync(jsonFilePath)) {
    console.log(chalk.red("Error: Nessun task trovato da eliminare."));
    return;
  }

  // leggere i task esistenti
  const tasksData = fs.readFileSync(jsonFilePath);
  const tasks = JSON.parse(tasksData);

  // trovare l'indice del task da eliminare
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    console.log(chalk.red(`Error: Task con ID ${id} non trovato.`));
    return;
  }

  // rimuovere il task
  tasks.splice(taskIndex, 1);
  fs.writeFileSync(jsonFilePath, JSON.stringify(tasks, null, 2));
  console.log(chalk.green(`Task con ID ${id} eliminato con successo.`));
};
