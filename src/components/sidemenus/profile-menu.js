import styles from '@/styles/components/profile/SideMenu.module.scss'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from 'next/link'
import React from 'react'

const MenuData = [
    {
        label: 'Lamaran Saya',
        value: 1,
        path: '/application-list'
    },
    {
        label: 'Keahlian Saya',
        value: 2
    },
    {
        label: 'Penawaran',
        value: 3
    },
]

export default function SideMenu() {
    const [selectedMenuId, setSelectedMenuId] = React.useState(0)

    const selectMenu = (id) => {
        setSelectedMenuId(id)
    }

    console.log(selectedMenuId)
    return(<>
        <div className={styles.buttonWrap}>
            {MenuData.map((item, index) => (
                <Link key={index} href={item.path ? item.path : '#'} style={{ textDecoration: 'none' }}>
                    <button className={item.value === selectedMenuId ? styles.activeBtn : styles.actionBtn} onClick={() => selectMenu(item.value)}>
                        {item.label}
                        <NavigateNextIcon />
                    </button>
                </Link>
            ))}
        </div>
    </>)
}