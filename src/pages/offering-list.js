import ProfileLayout from "@/components/layouts/profile-layout"
import OfferingCard from "@/components/offering/offering-card"
import styles from '@/styles/pages/OfferingList.module.scss'
import Link from "next/link"

export default function OfferingList() {
    return(<>
        <h2><b>Penawaran Saya</b></h2>
        <div className={styles.cardList}>
            <Link href='/offer-detail'>
                <OfferingCard />
            </Link>
        </div>
    </>)
}

OfferingList.getLayout = function getLayout(page) {
    return (
        <ProfileLayout>
            {page}
        </ProfileLayout>
    )
}