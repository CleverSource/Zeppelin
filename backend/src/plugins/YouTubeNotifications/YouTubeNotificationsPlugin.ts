import { guildPlugin } from "knub";
import { YouTubeNotificationsPluginType, zYouTubeNotificationsConfig } from "./types.js";

export const YouTubeNotificationsPlugin = guildPlugin<YouTubeNotificationsPluginType>()({
  name: "youtube_notifications",

  configSchema: zYouTubeNotificationsConfig,

  async beforeLoad(pluginData) {
    const config = pluginData.config.get();
    console.log(config);
  },
});
