import styles from '@/styles/pages/MySkills.module.scss'
import cn from 'classnames'
import IconWithButton from "@/components/icon-button"
import SidemenuLayout from "@/components/layouts/side-menu-layout"
import AddIcon from '@mui/icons-material/Add'
import VerifiedSkillCard from '@/components/my-skills/verified-skill-card'
import Link from 'next/link'

export default function MySkills() {
    return(<>
        <h3 className="mb-4"><b>Daftar Keahlian Saya</b></h3>
        <IconWithButton className={cn(styles.addBtn,'btn btn-primary blue')}>
            <AddIcon />
            <span><b>Pengajuan Keahlian Baru</b></span>
        </IconWithButton>
        <div className={styles.listCard}>
            <Link href='/my-skill-detail'>
                <VerifiedSkillCard />
            </Link>
            <Link href='/my-skill-detail'>
                <VerifiedSkillCard />
            </Link>
            <Link href='/my-skill-detail'>
                <VerifiedSkillCard />
            </Link>
            <Link href='/my-skill-detail'>
                <VerifiedSkillCard />
            </Link>
            <Link href='/my-skill-detail'>
                <VerifiedSkillCard />
            </Link>
        </div>
    </>)
}

MySkills.getLayout = function getLayout(page) {
    return (
        <SidemenuLayout>
            {page}
        </SidemenuLayout>
    )
}