export default function IconWithButton({
    className,
    children,
    ...props
}) {
    return(<>
        <button 
            className={className}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: '3px'
            }}
            {...props}
        >
            {children}
        </button>
    </>)
}