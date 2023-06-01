import styles from '@/styles/components/profile/SideMenu.module.scss'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const MenuData = [
    {
        label: 'Lamaran Saya',
        value: '1'
    },
    {
        label: 'Keahlian Saya',
        value: '2'
    },
    {
        label: 'Penawaran',
        value: '3'
    },
]

export default function SideMenu() {
    return(<>
        <div className={styles.buttonWrap}>
            {MenuData.map((item, index) => (
                <button key={index} className={styles.actionBtn}>
                    {item.label}
                    <NavigateNextIcon />
                </button>
            ))}
        </div>
    </>)
}