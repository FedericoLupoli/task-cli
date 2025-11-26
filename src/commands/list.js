import chalk from "chalk";
import fs from "fs";
import path from "path";

export const listCommand = (args) => {
  // controllare l'esistenza del file JSON
  const jsonFilePath = path.join(process.cwd(), "src/build/tasks.json");
  if (!fs.existsSync(jsonFilePath)) {
    console.log(chalk.red("Nessuna Task Aggiunta"));
    return;
  }

  const tasksData = fs.readFileSync(jsonFilePath);
  const tasks = JSON.parse(tasksData);

  // controllare se ci sono task
  if (tasks.length === 0) {
    console.log(chalk.red("Nessuna Task Aggiunta"));
    return;
  }

  // controllare se sono stati aggiunti dei filtri
  if (args.length > 0) {
    const filter = args[0];
    const filteredTasks = tasks.filter((task) => task.status === filter);
    if (filteredTasks.length === 0) {
      console.log(chalk.red(`Nessuna Task con stato: ${filter}`));
      return;
    }
    console.log(chalk.blue(`Task con stato: ${filter}`));
    filteredTasks.forEach((task) => {
      console.log(
        chalk.yellow(`ID: ${task.id}`) +
          ` | Descrizione: ${task.description}` +
          ` | Stato: ${task.status}` +
          ` | Creata il: ${new Date(task.createdAt).toLocaleString()}` +
          ` | Aggiornata il: ${new Date(task.updatedAt).toLocaleString()}`,
      );
    });
    return;
  }

  // stampare tutti i task
  console.log(chalk.blue("Elenco Task:"));
  tasks.forEach((task) => {
    console.log(
      chalk.yellow(`ID: ${task.id}`) +
        ` | Descrizione: ${task.description}` +
        ` | Stato: ${task.status}` +
        ` | Creata il: ${new Date(task.createdAt).toLocaleString()}` +
        ` | Aggiornata il: ${new Date(task.updatedAt).toLocaleString()}`,
    );
  });
};
