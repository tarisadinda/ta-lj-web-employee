import LayoutMain from "@/components/layouts/main"
import styles from '@/styles/pages/MyApplication.module.scss'
import ApplicationCard from "@/components/my-application/application-card"
import SideMenu from "@/components/sidemenus/profile-menu"

export default function MyApplication() {
    return(<>
        <h3 className="mb-4"><b>Daftar Lamaran Saya</b></h3>
        <div className={styles.colGroup}>
            <SideMenu />
            <div className={styles.cardList}>
                <ApplicationCard />
                <ApplicationCard />
                <ApplicationCard />
                <ApplicationCard />
                <ApplicationCard />
                <ApplicationCard />
            </div>
        </div>
    </>)
}

MyApplication.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}