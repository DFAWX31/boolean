import { GuildMember, MessageEmbed, TextChannel } from "discord.js";
import config from "../config";
import { Bot } from "../structures/Bot";
import { IBotEvent } from "../types";

export const event: IBotEvent = {
    name: "guildMemberAdd",
    async execute(member: GuildMember, client: Bot) {
        member.roles.add(config.memberRoleId);

        const welcomeMessageEmbed = new MessageEmbed()
            .setColor("ORANGE")
            .setTitle("New Member")
            .setDescription(
                `Welcome <@${member.id}> to the conaticus server, enjoy your stay!`
            );

        const welcomeChannel = client.channels.cache.get(
            config.welcomeChannelId
        ) as TextChannel;
        welcomeChannel.send({ embeds: [welcomeMessageEmbed] });
    },
};
