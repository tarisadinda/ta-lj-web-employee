import CompanyCard from '@/components/application-list/company-card'
import ProfileLayout from '@/components/layouts/profile-layout'
import SideMenu from '@/components/side-menu'
import styles from '@/styles/pages/ApplicationList.module.scss'
import Link from 'next/link'

export default function ApplicationList() {
    return(<>
        <h2><b>Daftar Lamaran Saya</b></h2>
        <div className={styles.cardList}>
            <Link href='/application-detail'>
                <CompanyCard />
            </Link>
            <CompanyCard />
        </div>
    </>)
}

ApplicationList.getLayout = function getLayout(page) {
    return (
        <ProfileLayout>
            {page}
        </ProfileLayout>
    )
}