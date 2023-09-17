import { Outlet } from "react-router-dom"

import styles from "./Layout.module.less"
import { Nav } from "./Nav"

export function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Nav/>
        <div className={styles.page}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
