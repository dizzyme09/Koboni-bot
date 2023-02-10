const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { TOKEN, clientId, guildId } = require("./utils/config.json");

const commands = [new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!"), new SlashCommandBuilder().setName("prefix").setDescription("Replies with the prefix!")];

const rest = new REST({ version: "9" }).setToken(TOKEN);

rest
	.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log("Successfully registered application commands."))
	.catch(console.log(console.error));
