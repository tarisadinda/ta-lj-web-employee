import CompanyCard from '@/components/application-list/company-card'
import LayoutMain from '@/components/layouts/main'
import SideMenu from '@/components/side-menu'
import styles from '@/styles/pages/ApplicationList.module.scss'
import Link from 'next/link'

export default function ApplicationList() {
    const MenuData = [
        {
            label: 'Lamaran Saya',
            value: 1,
            path: '/application-list'
        },
        {
            label: 'Keahlian Saya',
            value: 2,
            path: '/my-skills'
        },
        {
            label: 'Penawaran',
            value: 3
        },
    ]

    return(<>
        <h2><b>Daftar Lamaran Saya</b></h2>
        <div className={styles.wrapCard}>
            <SideMenu data={MenuData} />
            <div className={styles.cardList}>
                <Link href='/application-detail'>
                    <CompanyCard />
                </Link>
                <CompanyCard />
            </div>
        </div>
    </>)
}

ApplicationList.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}