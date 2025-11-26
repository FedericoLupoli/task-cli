#!/usr/bin/env node

import { program } from "commander";

import { helpCommand } from "../src/commands/help.js";
import { addCommand } from "../src/commands/add.js";

program.name("task-cli").description("Task Manager CLI").version("1.0.0");

// Help
program.command("help").description("List all commands").action(helpCommand);

// Add Task
program
  .command("add <description>")
  .description("Add a new task")
  .action(addCommand);

program.parse(process.argv);
