// lib/services/userService.ts
import User, { IUser } from '@/lib/database/models/User';

class UserService {
    async createUser(userData: Partial<IUser>): Promise<IUser | null> {
        try {
        const user = new User(userData);
        await user.save();
        return user;
        } catch (e) {
        console.error('Error creating user:', e);
        return null;
        }
    }

    async getUserById(userId: string): Promise<IUser | null> {
        try {
        return await User.findById(userId);
        } catch (e) {
        console.error('Error fetching user by ID:', e);
        return null;
        }
    }

    async getUsers(): Promise<IUser[]> {
        try {
        return await User.find();
        } catch (e) {
        console.error('Error fetching users:', e);
        return [];
        }
    }

    async updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null> {
        try {
        return await User.findByIdAndUpdate(userId, updateData, { new: true, useFindAndModify: false });
        } catch (e) {
        console.error('Error updating user:', e);
        return null;
        }
    }

    async deleteUser(userId: string): Promise<boolean> {
        try {
        const result = await User.findByIdAndDelete(userId);
        return result !== null;
        } catch (e) {
        console.error('Error deleting user:', e);
        return false;
        }
    }
}

export default new UserService();
