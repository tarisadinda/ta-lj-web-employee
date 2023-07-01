import LayoutAuth from "@/components/layouts/auth"
import styles from "@/styles/pages/Login.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Login() {
    const router = useRouter()

    const handleLogin = () => {
        router.push("/home")
    }
    
    return (<>
        {/* <div className={styles.actions}>
            <button className="btn btn-primary blue">Login</button>
            <button className="btn btn-secondary blue">Register</button>
        </div> */}
        <div className={styles.wrapper}>
            <div>
                <p className={styles.bannerText}>Selamat Datang!</p>
                <p className={styles.bannerText}>Silahkan login untuk melanjutkan</p>
                <div className={styles.inputData}>
                    <div>
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Masukkan username" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Masukkan password" />
                    </div>
                    <span>Lupa password?</span>
                    <button onClick={handleLogin} className="btn btn-primary blue">Login</button>
                    <span>Belum punya akun? <Link href="/register"><b>Daftar</b></Link></span>
                </div>               
            </div>
            <div>
                <div className={styles.tempLogo}>
                </div>
            </div>
        </div>
    </>)
}

Login.getLayout = function getLayout(page) {
    return (
        <LayoutAuth>
            {page}
        </LayoutAuth>
    )
}