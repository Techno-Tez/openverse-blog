
"use client"
import Link from "next/link"
import styles from "./authLinks.module.css"
import { useState } from "react"
import { useSession, signOut } from "next-auth/react"

const AuthLinks = () => {
  const { status } = useSession()

  const [open, setOpen] = useState(false)
  return (

    <>
      <div className={styles.authentication}>
        {
          status === "unauthenticated" ?
            (
              <Link href="/login">Login</Link>
            )
            : (
              <div className={styles.link}>
                <Link href="/write">Write</Link>
                <Link href="/" onClick={()=> signOut()}>Logout</Link>
              </div>
            )
        }
      </div>
      <div className={styles.burger} onClick={(() => setOpen(!open))}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {
            status === "unauthenticated" ?
              (
                <Link href="/login">Login</Link>
              )
              : (
                <div className={styles.link}>
                  <Link href="/write">Write</Link>
                  <Link href="/">Logout</Link>
                </div>
              )
          }
        </div>
      )}
    </>
  )
}

export default AuthLinks