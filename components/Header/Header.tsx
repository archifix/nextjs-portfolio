import { Link } from 'react-scroll'
import Logo from '../Logo/Logo'

import styles from '../../styles/header.module.scss'

const Header = () => {
  const spy = true
  const smooth = true
  const offset = 140
  const duration = 500
  return (
    <header>
      <div className={`container ${styles.header_container}`}>
        <Logo />
        <nav className={styles.header_nav}>
          <ul className={styles.header_nav_list}>
            <li className={styles.header_nav_list_item}>
              <Link
                href='/'
                to='about'
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                >
                  Обо мне
              </Link>
            </li>
            <li className={styles.header_nav_list_item}>
              <Link
                href='/'
                to='about'
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                >
                  Навыки
              </Link>
            </li>
            <li className={styles.header_nav_list_item}>
              <Link
                href='/'
                to='about'
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                >
                  Портфолио
              </Link>
            </li>
            <li className={styles.header_nav_list_item}>
              <Link
                href='/'
                to='about'
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                >
                  Связаться со мной
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header