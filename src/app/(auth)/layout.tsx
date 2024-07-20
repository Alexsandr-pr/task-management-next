const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center flex justify-center items-center fixed top-0 left-0 z-50 min-h-screen w-full bg-primary-100/5 bg-dotted-pattern bg-cover bg-fixed bg-center">
            <div className="w-[480px] h-auto rounded-2xl shadow-modal bg-slate-100">
                {children}
            </div>
        </div>
    )
}

export default Layout