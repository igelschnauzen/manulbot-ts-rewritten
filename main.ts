console.log('Running...');
console.log(' ');

import {token} from './token.js';
import {Telegraf} from 'telegraf';
import {manuls} from "./manuls.js";

const bot = new Telegraf(token);

abstract class methods {
    public static ping(ctx: any): void {
        ctx.reply("meow");
    }

    public static randomInteger(min: number, max: number): number {
        const rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    public static roll(ctx: any): void {
        const chance = this.randomInteger(0, 100);
        ctx.reply("Вероятность: " + chance + "%.");
    }    

    public static dice(ctx: any): void {
        const dice = this.randomInteger(1, 6);
        ctx.reply("Вы бросили кости. Результат: " + dice);
    }

    public static sendManul(ctx: any): void {
        const manulNumber = this.randomInteger(0, 15);
        ctx.reply(manuls[manulNumber]);
    }

    public static evdokim(ctx: any): void {
        ctx.reply('https://www.youtube.com/watch?v=V7HdWeYbV3Q');
    }
}

bot.start((ctx) => {
    ctx.reply('meow');
})

bot.command('evdokim', (ctx) => methods.evdokim(ctx));
bot.command('ping', (ctx) => methods.ping(ctx));
bot.command('info', (ctx) => methods.roll(ctx));
bot.command('manul', (ctx) => methods.sendManul(ctx));
bot.command('dice', (ctx) => methods.dice(ctx));

console.log('Runned!');

bot.launch();