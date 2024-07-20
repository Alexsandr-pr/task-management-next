// lib/database/User.ts
import { Schema, model, models, Document, Model } from 'mongoose';

interface IUser extends Document {
  role: 'STUDENT' | 'MENTOR';
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  lastLogin?: Date;
  dateJoined: Date;
  isEmailVerified: boolean;
  activationLink: string;
}

const UserSchema = new Schema<IUser>({
  role: { type: String, enum: ['STUDENT', 'MENTOR'], default: 'STUDENT' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastLogin: Date,
  dateJoined: { type: Date, default: Date.now },
  isEmailVerified: { type: Boolean, default: false },
  activationLink: { type: String, required: true, unique: true }
});

const User: Model<IUser> = models.User || model<IUser>('User', UserSchema);

export default User;
export type { IUser };
