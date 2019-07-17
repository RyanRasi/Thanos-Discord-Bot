//Thanos Discord Bot
//Created by Ryan Rasi
//http://ryanrasi.com

const {Client, Attachment}  = require('discord.js')
const token = 'NjAwMzI5NjAyODgzMzg3NDEz.XSyKmQ.SyTqKJseo4HXh7MVrz-UIsD9xfs';

const client = new Client();

const PREFIX = "Thanos ";

var version = '1.0.0';

client.on('ready', () => {
    console.log('Thanos is now connected');

    // client.channels.find(x => x.name === 'test').send('Hello! I\'m now connected!');

});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`You could not live with your own failure. ${member} , And where did that bring you? Back to me.`)

    const eattachment = new Attachment('./images/entrance.gif')
    msg.channel.send(msg.author, eattachment)

});

client.on('message', (msg) => {

    let identifier = msg.content.substring(PREFIX.length).split(" ");

    switch(identifier[0]){

        case 'snap':
            const attachment = new Attachment('./images/snap.gif')
            msg.channel.send("I hope they remember you." + msg.author, attachment);
        break;

        case 'fight':
            const attachment2 = new Attachment('./images/dropofblood.gif')
            msg.channel.send("All that for a drop of blood." + msg.author, attachment2);
        break;

        case 'kill':
        const attachment3 = new Attachment('./images/remember.gif')
        msg.channel.send("No resurrections this time." + msg.author, attachment3);
        break;

    }

    if (msg.content === (`I am ` + msg.author).toLowerCase()) {
        msg.channel.send(`I don't even know who you are. ${msg.author}!`)
    }

    if (msg.content === 'What did it cost'.toLowerCase()) {
        msg.channel.send(`Everything ${msg.author}!`)
    }

    
    if (msg.content === 'How did you know that'.toLowerCase()) {
        msg.channel.send(`You're not the only one cursed with knowledge. ${msg.author}!`)
    }

    if (msg.content === `Kill `.toLowerCase() + msg.author) {
        msg.channel.send(`No resurrections this time. ${msg.author}!`)
    }

});

client.login(token);
