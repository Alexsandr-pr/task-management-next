// app/api/notifications/route.ts
import { NextResponse } from 'next/server';
import userNotificationService from '@/lib/services/userNotificationService';
import { connectToDatabase } from '@/lib/database/dbConnect';

export async function GET(req: Request) {
    await connectToDatabase();

    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) {
        console.log('ID is missing');
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        const data = await userNotificationService.getNotification(id);
        if (data) {
        return NextResponse.json(data);
        } else {
        return NextResponse.json({ error: 'Notification not found' }, { status: 404 });
        }
    } catch (e) {
        console.error('Error in getNotification controller:', e);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    await connectToDatabase();

    const url = new URL(req.url);
    const id = url.pathname.split('/').pop() || "";
    const { data } = await req.json();

    if (!data) {
        return NextResponse.json({ error: 'Data is required' }, { status: 400 });
    }

    try {
        const updatedNotification = await userNotificationService.change(id, data);
        if (updatedNotification) {
            return NextResponse.json(updatedNotification);
        } else {
            return NextResponse.json({ error: 'Error updating notification' }, { status: 500 });
        }
    } catch (e) {
        console.error('Error in change controller:', e);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
    export async function POST(req: Request) {
    await connectToDatabase();

    const { userId } = await req.json();
    try {
        const newUserNotification = await userNotificationService.create(userId);
        if (newUserNotification) {
        return NextResponse.json(newUserNotification, { status: 201 });
        } else {
        return NextResponse.json({ error: 'Error creating notification' }, { status: 500 });
        }
    } catch (e) {
        console.error('Error in create controller:', e);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
