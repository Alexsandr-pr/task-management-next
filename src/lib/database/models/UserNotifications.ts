// lib/database/UserNotifications.ts
import { Schema, model, models, Document, Model } from 'mongoose';

interface IUserNotifications extends Document {
    isMessage: boolean;
    isTaskUpdate: boolean;
    isTaskDeadline: boolean;
    isMentorHelp: boolean;
    userId: Schema.Types.ObjectId;
}

const UserNotificationsSchema = new Schema<IUserNotifications>({
    isMessage: { type: Boolean, default: false },
    isTaskUpdate: { type: Boolean, default: false },
    isTaskDeadline: { type: Boolean, default: false },
    isMentorHelp: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const UserNotifications: Model<IUserNotifications> = models.UserNotifications || model<IUserNotifications>('UserNotifications', UserNotificationsSchema);

export default UserNotifications;
export type { IUserNotifications };
