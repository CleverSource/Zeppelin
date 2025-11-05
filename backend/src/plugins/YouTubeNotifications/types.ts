import { BasePluginType } from "knub";
import z from "zod/v4";
import { zBoundedCharacters, zSnowflake } from "../../utils.js";

const zYouTubeNotification = z.strictObject({
  youtube_channel_id: z.string().min(1),
  notification_channel: zSnowflake,
  message: zBoundedCharacters(0, 4000),
});

export const zYouTubeNotificationsConfig = z.strictObject({
  notifications: z.record(z.string().max(100), zYouTubeNotification).default({}),
});

export interface YouTubeNotificationsPluginType extends BasePluginType {
  configSchema: typeof zYouTubeNotificationsConfig;
}
