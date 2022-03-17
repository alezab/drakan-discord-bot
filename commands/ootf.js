const { Command } = require('yuuko')
module.exports = new Command('ootf', async (message, args, context) => { // eslint-disable-line no-unused-vars
  message.channel.createMessage({
    embed: {
      title: 'Drakan: Order of the Flame Help Page',
      color: 0x800000,
      description: '**Downloads:**\nEurope(EN)/Redump: [Internet Archive](https://archive.org/details/DrakanOrderOfTheFlameEurope) ([checksums](http://redump.org/disc/31999/))\nUSA(EN)/Redump: [Internet Archive](https://archive.org/download/redump_pc_D-2/Drakan%20-%20Order%20of%20the%20Flame%20%28USA%29.7z) ([Log In](https://archive.org/account/login.php) first) ([checksums](http://redump.org/disc/64407/))\nGermany(DE)/Redump: [Internet Archive](https://archive.org/download/redump_pc_D-2/Drakan%20-%20Order%20of%20the%20Flame%20%28Germany%29.7z) ([Log In](https://archive.org/account/login.php) first) ([checksums](http://redump.org/disc/35539/))\nItaly(IT)/Redump: [Internet Archive](https://archive.org/details/drakanorderoftheflame_202003) ([checksums](http://redump.org/disc/56829/))',
      thumbnail: {
        url: 'https://i.imgur.com/d2AaAr8.png'
      },
      fields: [
        {
          name: 'Useful Links:',
          value: '[Quick Start & Troubleshooting Guide](https://www.arokhslair.net/downloads/Quickstart_Troubleshooting_Guide.txt)\n[Drakan Level Editor Essentials](https://www.arokhslair.net/forum/viewtopic.php?t=4428)\n[How to set up a Drakan Dedicated Server on Linux](https://www.arokhslair.net/forum/viewtopic.php?t=4491)\n[OpenDrakan ~ A Drakan engine recreation](https://github.com/Zalasus/opendrakan)\n[The Searing Mountain by YanGez - Spiritual Drakan successor](https://www.indiedb.com/games/the-searing-mountain)',
          inline: false
        },
        {
          name: 'Patches:',
          value: 'For multiplayer it is recommened to use Community Patch',
          inline: false
        },
        {
          name: 'Community Patch',
          value: 'Lang support: EN, DE, ES, FR\nFR support added in 153.01a\nNote: Patch 445 isn\'t required\n[Changelog](https://www.arokhslair.net/forum/viewtopic.php?f=2&t=4286)\n[Arokh\'s Lair (153.01)](https://www.arokhslair.net/downloads/Community_Patch_Setup.zip)\n[Google Drive (153.01a)](https://drive.google.com/file/d/1Cs5ncx3ACJG-QQ3oqQ4aBDYBWCgv0JnE/view?usp=sharing)',
          inline: true
        },
        {
          name: 'Updated multiplayer levels pack\nfor Community Patch',
          value: '[Arokh\'s Lair (2021-06-18)](https://www.arokhslair.net/mplevels/MP_Map_Pack.zip)\n[Lava Land (b05)](https://www.arokhslair.net/mplevels/Lava%20Land.zip)',
          inline: true
        },
        {
          name: 'AiO Patch Final 2.170',
          value: 'Note: Don\'t combine with Community Patch\nAiO Patch doesn\'t include additional fan-made content and it\'s not compatible with community hosted dedicated servers\n[Changelog](https://www.arokhslair.net/forum/viewtopic.php?f=2&t=3765) | [Arokh\'s Lair](https://www.arokhslair.net/downloads/Drakan_AiO_Patch_Final2.170.zip) | [PCGW](https://community.pcgamingwiki.com/files/file/1227-drakan-order-of-the-flame-aio-patch) | [ModDB](https://www.moddb.com/games/drakan-order-of-the-flame/downloads/drakan-aio-unofficial-patch) | [Google Drive](https://drive.google.com/open?id=0B2DPRdP0LBDGOXV0ZVR3d1pfbU0)',
          inline: false
        },
        {
          name: 'Patch 445',
          value: 'Note: Obsolete, install before applying AiO Patch\n[Arokh\'s Lair](https://www.arokhslair.net/downloads/drakan_patch445_eng.zip) | [ModDB](https://www.moddb.com/games/drakan-order-of-the-flame/downloads/drakan-patch-v445)',
          inline: false
        }
      ],
      image: {
        url: 'https://i.imgur.com/tgcaInt.png'
      },
      timestamp: new Date(),
      footer: {
        text: 'Arokh\'s Lair',
        icon_url: 'https://cdn.discordapp.com/icons/442730021165989910/d1f83595af94ebbaee7e499448386a48.webp'
      }
    }
  })
})
