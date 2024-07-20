// app/api/users/route.ts
import { NextResponse } from 'next/server';
import userService from '@/lib/services/userService';
import { connectToDatabase } from '@/lib/database/dbConnect';

export async function GET() {
    await connectToDatabase();
    const users = await userService.getUsers();
    
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    await connectToDatabase();
    const userData = await req.json();
    const newUser = await userService.createUser(userData);
    if (newUser) {
        return NextResponse.json(newUser, { status: 201 });
    } else {
        return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
    }
}
