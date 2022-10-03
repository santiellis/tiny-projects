import React from 'react'
import styles from "../../styles/tic-tac-toe.module.css"

export default function Square({val, selectSquare}) {
  return (
    <div className={styles.square + " " + styles.noselect} onClick={selectSquare}>
      {val}
    </div>
  )
}
