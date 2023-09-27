"use client"

import Image from "next/image"
import styles from "./themeToggle.module.css"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle = () => {

  const {theme, toggle} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
      <Image alt="light theme" src="/sun.png" height={14} width={14}/>
      <div className={`${styles.ball} duration-300`} style={theme === "dark" ? {right: 1, backgroundColor: "black"} : {left: 1}}></div>
      <Image alt="dark theme" src="/moon.png" height={14} width={14}/>
    </div>
    )
}

export default ThemeToggle