require('dotenv-flow').config();

const discord = require("discord.js");
const client = new discord.Client();

const config = require("./config.json");
const commandBase = require('./commands/command-base');
const loadCommands = require('./commands/load-commands');
const loadFeatures = require('./features/load-features')

module.exports = {client, config};

client.on('ready', async () => {
    console.log("Logged in as " + client.user.tag + "!")


});

client.login(process.env.TOKEN).then(r => {
});