import LayoutMain from "@/components/layouts/main"
import cn from 'classnames'
import styles from '@/styles/pages/Profile.module.scss'
import { Avatar, Card, IconButton } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import SideMenu from "@/components/side-menu"
import SVGVerified from '@/public/icons/verified.svg'
import { useRouter } from "next/router"

export default function Profile() {
    const router = useRouter()

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

    const editInfo = () => {
        router.push('/edit-profile')
    }
    
    return(<>
        <div>
            <div className={styles.profileName}>
                <div className={styles.avaWrap}>
                    <Avatar sx={{ width: 100, height: 100 }} />
                    <IconButton variant="contained" size="small" className={styles.editBtn}>
                        <BorderColorIcon className={styles.editIcon} fontSize="inherit" color="black" />
                    </IconButton>
                </div>
                <div>
                    <h4><b>Dio Putra, S.T</b></h4>
                    <p className={cn(styles.levelGroup, "mb-0")}>Level 2 <SVGVerified className={styles.verifIcon} /></p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.nav}>
                    <SideMenu data={MenuData} />
                </div>
                <Card variant="outlined" className={styles.infoCard}>
                    <div>
                        <div className={styles.editGroup}>
                            <b>NRP</b>
                            <div className={styles.group}>
                                <button className={cn(styles.skillBtn, "btn")} onClick={editInfo}>
                                    <BorderColorIcon fontSize="small" className={styles.editIcon} />
                                    <span>Edit Informasi</span>
                                </button>
                            </div>
                        </div>
                        <p>3511900056602</p>
                    </div>
                    <div>
                        <b>Email</b>
                        <p>dioputra@gmail.com</p>
                    </div>
                    <div>
                        <b>Nomor Handphone</b>
                        <p>085203476772</p>
                    </div>
                    <div>
                        <b>Alamat</b>
                    </div>
                    <div>
                        <b>Detail</b>
                        <p>Perumahan Sentosa Mandiri Blok C3-12</p>
                    </div>
                    <div>
                        <b>Kota/Kabupaten</b>
                        <p>Surabaya, Jawa Timur</p>
                    </div>
                    <div className={styles.skillSection}>
                        <div className={styles.editGroup}>
                            <b>Keahlian</b>
                            <div className={styles.group}>
                                <button className={cn(styles.skillBtn, "btn")}>
                                    <BorderColorIcon fontSize="small" className={styles.editIcon} />
                                    <span>Edit Keahlian</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles.skillList}>
                            <Card variant="outline" className={styles.boxWrap}>
                                <div className={styles.textBtn}>
                                    <div className={styles.group}>
                                        <b>Mobile Developer</b>
                                        <span>Level 1</span>
                                    </div>
                                    <NavigateNextIcon />
                                </div>
                            </Card>
                            <Card variant="outline" className={styles.boxWrap}>
                                <div className={styles.textBtn}>
                                    <div className={styles.group}>
                                        <b>Mobile Developer</b>
                                        <span>Level 1</span>
                                    </div>
                                    <NavigateNextIcon />
                                </div>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </>)
}

Profile.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}