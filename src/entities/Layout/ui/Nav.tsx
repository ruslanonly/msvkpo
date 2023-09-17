import { Link } from "react-router-dom"
import { Link as A } from "@mui/joy"
import styles from "./Layout.module.less"

export function Nav() {
  return (
    <div className={styles.nav}>
      <div>
        <h1>Домашняя работа</h1>
      </div>
      <div className={styles.links}>
        <Link to="/french-numerals"><A level="title-lg">Практическая работа 1</A></Link>
        <Link to="/chess-order"><A level="title-lg">Практическая работа 2</A></Link>
      </div>
    </div>
  )
}
