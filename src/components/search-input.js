import styles from '@/styles/components/SearchInput.module.scss'
import cn from 'classnames'

export default function SearchInput() {
    return (<>
        <div className={styles.inputGroup}>
            <input type="text" className={cn(styles.inputWrapper, 'form-control')} placeholder="Masukkan keyword di sini" />
            <button className={cn(styles.searchBtn, 'btn-primary blue')}>Cari</button>
        </div>
    </>)
}