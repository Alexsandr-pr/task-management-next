// lib/services/userNotificationService.ts
import UserNotifications, { IUserNotifications } from '@/lib/database/models/UserNotifications';

class UserNotificationService {
  async create(userId: string): Promise<IUserNotifications | null> {
    try {
      const userNotifications = await UserNotifications.create({ userId });
      await userNotifications.save();
      return userNotifications;
    } catch (e) {
      console.error('Error creating notification:', e);
      return null;
    }
  }

  async getNotification(userId: string): Promise<IUserNotifications | null> {
    try {
      return await UserNotifications.findOne({ userId });
    } catch (e) {
      console.error('Error fetching notification:', e);
      return null;
    }
  }

  async change(userId: string, data: Partial<IUserNotifications>): Promise<IUserNotifications | null> {
    try {
      const { isMessage, isTaskUpdate, isTaskDeadline, isMentorHelp } = data;
      const updatedNotification = await UserNotifications.findOneAndUpdate(
        { userId },
        { $set: { isMessage, isTaskUpdate, isTaskDeadline, isMentorHelp } },
        { new: true, useFindAndModify: false }
      );
      if (!updatedNotification) {
        console.error(`Notification for user ${userId} not found.`);
        return null;
      }
      return updatedNotification;
    } catch (e) {
      console.error('Error updating notification:', e);
      return null;
    }
  }

  async delete(userId: string): Promise<boolean> {
    try {
      const deletedNotification = await UserNotifications.findOneAndDelete({ userId });
      if (deletedNotification) {
        console.log(`Notification for user ${userId} deleted successfully.`);
        return true;
      } else {
        console.error(`Notification for user ${userId} not found.`);
        return false;
      }
    } catch (e) {
      console.error('Error deleting notification:', e);
      return false;
    }
  }
}

export default new UserNotificationService();
