import Navbar from "../navbar"
import cn from 'classnames'
import styles from '@/styles/components/layouts/SidemenuLayout.module.scss'
import SideMenu from "../side-menu"

export default function SidemenuLayout({ children }) {
    const MenuData = [
        {
            label: 'Approved Skills',
            value: 1,
        },
        {
            label: 'Status Pengajuan',
            value: 2
        },
    ]

    return (<>
    <Navbar />
    <div 
        className={cn(styles.wrapper,"container")}
        style={{
            paddingTop: '80px',
            marginBottom: '40px'
        }}
    >
        <div>
            <SideMenu data={MenuData} />
        </div>
        <main>
            {children}
        </main>
    </div>
    </>)
}