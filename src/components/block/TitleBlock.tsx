
const TitleBlock = ({title, text}) => {
    return (
        <div className="flex flex-col gap-1">
                <h3 className="">{title}</h3>
            
            
                <p className="text-xs text-second-400 dark:text-info-300 font-medium">{text}</p>
            
        </div>
    )
}

export default TitleBlock