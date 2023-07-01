export default function IconWithButton({
    className,
    children
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
        >
            {children}
        </button>
    </>)
}