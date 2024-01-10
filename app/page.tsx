import CompWithFetch from "@/components/CompWithFetch";
import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import styles from '../styles/Board.module.css';
import { SearchFilter } from "@/components/SearchFilter";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Welcome to My Task
        </h1>
        <SearchFilter
            query={''}
            name='search-art'
            placeholderText={`Search`}
          />
      </div>
      <div className={styles.dashboard}>
      <Dashboard/>
      </div>
    </main>
  );
}
