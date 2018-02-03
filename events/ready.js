exports.run = (client) => {
  console.log(`Ready!`);
  client.user.setPresence({ game: { name: 'Nebo, help please?', type: 2 } });
}
