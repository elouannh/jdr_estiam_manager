const { Client } = require("discord.js");
const { ActivityType } = require("discord-api-types/v10");

/**
 * The function that connects the pair-to-pair Discord app.
 * @returns {void} Nothing.
 */
const appbot = () => {
    const client= new Client({
        intents: 3276799,
        failIfNotExists: false,
        status: 'online',
        activities: [
            {
                name: `un nouveau jeu de rôle !`,
                type: ActivityType['Playing'],
            },
        ],
    });

    void client.login(process.env.TOKEN);

    client.on("ready", () => {
        console.log("appbot: ready");
    });

    client.on("messageCreate", (message) => {

    });
}

module.exports = appbot;