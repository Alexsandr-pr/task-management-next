"use server"
import { Switch } from "@/components/ui/switch";
import { Button } from '@/components/ui/button';

interface Settings {
    isMessage: boolean;
    isTaskUpdate: boolean;
    isTaskDeadline: boolean;
    isMentorHelp: boolean;
}

async function getData(id: string): Promise<Settings> {
    const res = await fetch(`http://localhost:5000/api/notification/${id}`, { cache: 'force-cache' });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

// как мне сделать чтобы это был и клиентский компонент и было состояние,
//  может быть использовать два компонента и прокидовать через пропсы, чтобы один был серверным другой клиентским
// async function changeData(id: string, data: Settings) {
//     console.log(data)
//     const res = await fetch(`http://localhost:5000/api/notification/${id}`, {data});

//     if (!res.ok) {
//         throw new Error('Failed to update data');
//     }

//     return res.json();
// }

const SettingsSecurity = async () => {
    const data = await getData("6698c0e12b8fd2829d16d73a");

    // const handleSaveChanges = async () => {
    //     const updatedSettings: Settings = {
    //         isMessage: (document.getElementById('isMessage') as HTMLInputElement).checked,
    //         isTaskUpdate: (document.getElementById('isTaskUpdate') as HTMLInputElement).checked,
    //         isTaskDeadline: (document.getElementById('isTaskDeadline') as HTMLInputElement).checked,
    //         isMentorHelp: (document.getElementById('isMentorHelp') as HTMLInputElement).checked,
    //     };

    //     try {
    //         await changeData("6698c0e12b8fd2829d16d73a", updatedSettings);
    //         alert('Settings saved successfully');
    //     } catch (error) {
    //         console.error(error);
    //         alert('Failed to save settings');
    //     }
    // };

    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                    <Switch id="isMessage" defaultChecked={data.isMessage} />
                    <span className='text-sm'>Message</span>
                </div>
                <div className="flex items-center gap-5">
                    <Switch id="isTaskUpdate" defaultChecked={data.isTaskUpdate} />
                    <span className='text-sm'>Task Update</span>
                </div>
                <div className="flex items-center gap-5">
                    <Switch id="isTaskDeadline" defaultChecked={data.isTaskDeadline} />
                    <span className='text-sm'>Task Deadline</span>
                </div>
                <div className="flex items-center gap-5">
                    <Switch id="isMentorHelp" defaultChecked={data.isMentorHelp} />
                    <span className='text-sm'>Mentor Help</span>
                </div>
            </div>
            <div className="w-full sm:w-[216px]">
                <Button className="w-full" >
                    Save Changes
                </Button>
            </div>
        </>
    );
};

export default SettingsSecurity;