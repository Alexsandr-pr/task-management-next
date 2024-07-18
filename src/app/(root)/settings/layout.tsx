import Link from "next/link";


const data = [
    {
        param: "general",
        text: "General"
    },
    {
        param: "notification",
        text: "Notification"
    },
    {
        param: "profile",
        text: "Profile"
    }
]


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<div className='w-full h-[100vh] flex flex-col dark:border-none p-6 md:p-8 gap-8 dark:bg-dark-200 bg-[#FAFAFA] border-l border-solid border-l-main'>
            <div className="p-5 md:p-8 h-[100%] rounded flex flex-col gap-8 bg-white dark:bg-dark-100">
                <ul  className='w-full flex border-b gap-6 dark:border-none  border-b-main border-solid'>
                    {
                        data.map(({text, param}) => {
                            return (
                                <li>
                                    <Link href={`/settings/${param}`} className={`
                                    pt-0 
                                    flex
                                    text-sm 
                                    font-semibold 
                                    p-3  
                                    
                                    
                                    `}
                                    >{text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-col gap-8">
                    {children}
                </div>
            </div>
        </div>
	);
}
