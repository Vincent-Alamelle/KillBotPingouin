/**
 * Discord Bot settings. These are mandatory and will affect what the bot
 *   posts about, and where it posts to.
 */

module.exports = {
  discord: {
    // The Discord token of the Bot to post through.
    token: 'MVDiKohaHien8L7QoCOYuQMLdvOQXvEB',
    // The ID of the discord channel to post battleboard infos to.
    feedChannelId: '560917003154751498',
    // The ID of the discord channel to post albion status infos to.
    statusChannelId: '560917003154751498'
  },
  guild: {
    // The name of your guild (or guilds, if the guild is large).
    guilds: process.env.ALBION_GUILDS = 'Gallia Celtica',
    // The alliance your guild belongs to
    alliance: process.env.ALBION_ALLIANCE
  },
  battle: {
    // Min players to report as battle
    minPlayers: 10,
    // Min guild players to report as battle
    minRelevantPlayers: 3
  },
  kill: {
    // Min killfame to report kill
    minFame: 1
  }
};
