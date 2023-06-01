import LayoutAuth from "@/components/layouts/auth"
import styles from "@/styles/pages/Register.module.scss"
import Link from "next/link"

export default function AlumniPens() {
    return (<>
        <div className={styles.wrapper}>
            <div className={styles.inputSection}>
                <p><b>Daftar Akun</b></p>
                <div className={styles.opt}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Alumni PENS
                        </label>
                    </div>
                    <Link href="/register/umum">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Umum
                            </label>
                        </div>
                    </Link>
                </div>
                <div className={styles.inputData}>
                    <div>
                        <label>Nama Lengkap</label>
                        <input className="form-control" placeholder="Masukkan nama lengkap" />
                    </div>
                    <div>
                        <label>NRP</label>
                        <input className="form-control" placeholder="Masukkan NRP" />
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

AlumniPens.getLayout = function getLayout(page) {
    return (
        <LayoutAuth>
            {page}
        </LayoutAuth>
    )
}