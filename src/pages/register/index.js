import LayoutAuth from "@/components/layouts/auth"
import styles from "@/styles/pages/Register.module.scss"
import Link from "next/link"

export default function Umum() {
    return (<>
        <div className={styles.wrapper}>
            <div className={styles.inputSection}>
                <div className={styles.inputData}>
                    <p><b>Daftar Akun</b></p>
                    <div>
                        <label>Nama Lengkap</label>
                        <input className="form-control" placeholder="Masukkan nama lengkap" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input className="form-control" placeholder="Masukkan email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Masukkan password" />
                    </div>
                    <button className="btn btn-primary blue">Daftar</button>
                    <span>Sudah punya akun? <Link href="/login"><b>Login</b></Link></span>
                </div>
            </div>
            <div>
                <div className={styles.tempLogo}></div>
            </div>
        </div>
    </>)
}

Umum.getLayout = function getLayout(page) {
    return (
        <LayoutAuth>
            {page}
        </LayoutAuth>
    )
}