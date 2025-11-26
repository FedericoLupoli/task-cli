import chalk from "chalk";
import fs from "fs";
import path from "path";

export const addCommand = (description) => {
  // returnare un messaggio di errore se la descrizione è vuota
  if (!description || description.trim() === "") {
    console.log(
      chalk.red("Error: Inserire una descrizione valida per il task."),
    );
    return;
  }

  // controllare se esiste il JSON per il salvataggio dei task
  const jsonFilePath = path.join(process.cwd(), "src/build/tasks.json");
  if (!fs.existsSync(jsonFilePath)) {
    fs.writeFileSync(jsonFilePath, JSON.stringify([]));
  }

  // leggere l'ultimo task esistente e generare un nuovo id
  const tasksData = fs.readFileSync(jsonFilePath);
  const tasks = JSON.parse(tasksData);
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
  fs.writeFileSync(jsonFilePath, JSON.stringify(tasks, null, 2));

  console.log(chalk.green(`Task aggiunto con successo (ID: ${newTaskId})`));
};
