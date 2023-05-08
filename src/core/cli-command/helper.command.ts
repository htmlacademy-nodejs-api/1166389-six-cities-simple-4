import chalk from 'chalk';
import { CliCommandInterface } from '../../interface/cli-command.interface.js';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            main.js --<${chalk.green('command')}> [--arguments]
        Команды:
            --${chalk.green('version')}                 # выводит номер версии
            --${chalk.green('help')}:                  # печатает этот текст
            --${chalk.green('import')} <path>:             # импортирует данные из TSV
            --${chalk.green('generate')} <n> <path> <url>  # генерирует произвольное количество тестовых данных
        `);
  }
}
