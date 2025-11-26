#!/usr/bin/env node

import { program } from "commander";
import { helpCommand } from "../src/commands/help.js";

program.name("task-cli").description("Task Manager CLI").version("1.0.0");

program.command("help").description("List all commands").action(helpCommand);

program.parse(process.argv);
