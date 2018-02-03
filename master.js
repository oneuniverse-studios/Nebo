/*
    Call the functions to spawn shards
*/

const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./run.js');
Manager.spawn(7); // This example will spawn 2 shards (17,500 guilds);
