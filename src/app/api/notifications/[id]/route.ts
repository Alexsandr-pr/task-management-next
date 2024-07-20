// // app/api/notifications/[id]/route.ts
// import { NextResponse } from 'next/server';
// import userNotificationService from '@/lib/services/userNotificationService';
// import { connectToDatabase } from '@/lib/database/dbConnect';

// export async function GET(req: Request, { params }: { params: { id: string } }) {
//     await connectToDatabase();

//     try {
//         const data = await userNotificationService.getNotification(params.id);
//         if (data) {
//             return NextResponse.json(data);
//         } else {
//             return NextResponse.json({ error: 'Notification not found' }, { status: 404 });
//         }
//     } catch (e) {
//         console.error('Error in getNotification controller:', e);
//         return NextResponse.json({ error: 'Server error' }, { status: 500 });
//     }
// }

// export async function PUT(req: Request) {
//     await connectToDatabase();

//     const url = new URL(req.url);
//     const id = url.pathname.split('/').pop() || "";
//     const { data } = await req.json();

//     if (!data) {
//         return NextResponse.json({ error: 'Data is required' }, { status: 400 });
//     }

//     try {
//         const updatedNotification = await userNotificationService.change(id, data);
//         if (updatedNotification) {
//             return NextResponse.json(updatedNotification);
//         } else {
//             return NextResponse.json({ error: 'Error updating notification' }, { status: 500 });
//         }
//     } catch (e) {
//         console.error('Error in change controller:', e);
//         return NextResponse.json({ error: 'Server error' }, { status: 500 });
//     }
// }

// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//     await connectToDatabase();

//     try {
//         const success = await userNotificationService.delete(params.id);
//         if (success) {
//         return NextResponse.json({ message: 'Notification deleted successfully' });
//         } else {
//         return NextResponse.json({ error: 'Error deleting notification' }, { status: 500 });
//         }
//     } catch (e) {
//         console.error('Error in delete controller:', e);
//         return NextResponse.json({ error: 'Server error' }, { status: 500 });
//     }
// }
