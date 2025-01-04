const {Telegraf} =require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
 

try{
bot.start((ctx)=>ctx.reply(`Welcome to Karthik\'s Bot`));
bot.command('todayquote',(ctx)=>ctx.reply('All is well'));
bot.command('quit', async (ctx)=>{
    await ctx.telegram.leaveChat(ctx.message.chat.id);
    await ctx.leaveChat();
})

bot.launch();

} catch {
    console.log("Unexpected Command");
}