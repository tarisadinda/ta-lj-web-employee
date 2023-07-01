import CompanyCard from '@/components/application-list/company-card'
import LayoutMain from '@/components/layouts/main'
import SideMenu from '@/components/sidemenus/profile-menu'
import styles from '@/styles/pages/ApplicationList.module.scss'
import Link from 'next/link'

export default function ApplicationList() {
    return(<>
        <h2><b>Daftar Lamaran Saya</b></h2>
        <div className={styles.wrapCard}>
            <SideMenu />
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