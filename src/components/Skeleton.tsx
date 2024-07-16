

"use client"

const Skeleton = ({
    cls, 
    children, 
    loading
}: {
    cls:string;
    children:React.ReactNode;
    loading:boolean;
}) => {
    
    if(loading) {
        return (
            <div className={`rounded   ${cls }`}>
                
            </div>
        )
    } 
    return (
        <>
        {children}
        </>
    )
    
}

export default Skeleton