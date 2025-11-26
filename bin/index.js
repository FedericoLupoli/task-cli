#!/usr/bin/env node

import { program } from "commander";

import { helpCommand } from "../src/commands/help.js";
import { addCommand } from "../src/commands/add.js";
import { listCommand } from "../src/commands/list.js";
import { debugCommand } from "../src/commands/debug.js";

program.name("task-cli").description("Task Manager CLI").version("1.0.0");

// Help
program.command("help").description("List all commands").action(helpCommand);

// Add Task
program
  .command("add <description>")
  .description("Add a new task")
  .action(addCommand);

// List Tasks
program
  .command("list [status]")
  .description("List all tasks, optionally filtered by status")
  .action((status) => {
    const args = [];
    if (status) {
      args.push(status);
    }
    listCommand(args);
  });

// DEBUG
program
  .command("debug")
  .description("Debugging information")
  .action(debugCommand);

program.parse(process.argv);
