import Filter from "@/components/home/filter"
import JobCard from "@/components/home/job-card"
import LayoutMain from "@/components/layouts/main"
import SearchInput from "@/components/search-input"
import styles from "@/styles/pages/Home.module.scss"

export default function Home() {
    return (<>
        <div>
            <p className={styles.title}>Temukan Lowongan Terdekat dari Lokasimu!</p>
            <div className={styles.searchSection}>
                <SearchInput />
            </div>
            <div className={styles.mainContent}>
                <Filter />
                <div className={styles.jobList}>
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </div>
    </>)
}

Home.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}