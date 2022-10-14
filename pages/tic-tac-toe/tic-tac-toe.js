import Link from "next/link";
import React, { useEffect, useState } from "react";
import Square from "../../components/tic-tac-toe/Square";
import styles from "../../styles/tic-tac-toe.module.css";
import { Patterns } from "../../components/tic-tac-toe/Patterns";

export default function Tic_Tac_Toe() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "", state: "none" });

  useEffect(() => {
    checkTie();
    checkWin();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  const selectSquare = (square) => {
    if (result.state !== "none") return;
    setBoard(
      board.map((val, index) => {
        if (index === square && val !== "") {
          setPlayer((prev) => {
            if (prev === "X") return "O";
            else {
              return "X";
            }
          });
        }
        if (index === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === "") return;
      let winningPattern = true;
      currentPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          winningPattern = false;
        }
      });
      if (winningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "Nobody", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setResult({ winner: "", state: "none" });
    setPlayer("O");
  };

  return (
    <div className={styles.body + " " + styles.noselect}>
      <div className={styles.boardContainer}>
        
          <div className={styles.playerContainer}>
            {result.winner ? (
              <h1 className={styles.playerWin}>Victory by {result.winner}</h1>
            ) : (
              <h1 className={styles.player}>Current player: {player}</h1>
            )}
          </div>
        <div className={styles.board}>
          <div className={styles.row}>
            <Square
              val={board[0]}
              selectSquare={() => {
                selectSquare(0);
              }}
            />
            <Square
              val={board[1]}
              selectSquare={() => {
                selectSquare(1);
              }}
            />
            <Square
              val={board[2]}
              selectSquare={() => {
                selectSquare(2);
              }}
            />
          </div>
          <div className={styles.row}>
            <Square
              val={board[3]}
              selectSquare={() => {
                selectSquare(3);
              }}
            />
            <Square
              val={board[4]}
              selectSquare={() => {
                selectSquare(4);
              }}
            />
            <Square
              val={board[5]}
              selectSquare={() => {
                selectSquare(5);
              }}
            />
          </div>
          <div className={styles.row}>
            <Square
              val={board[6]}
              selectSquare={() => {
                selectSquare(6);
              }}
            />
            <Square
              val={board[7]}
              selectSquare={() => {
                selectSquare(7);
              }}
            />
            <Square
              val={board[8]}
              selectSquare={() => {
                selectSquare(8);
              }}
            />
          </div>
        </div>
      <div>
        <h2
          onClick={() => {
            restartGame();
          }}
          className={styles.card}
        >
          Reset Game
        </h2>
        <h2 className={styles.card}>
          <Link href="/">Back to Main</Link>
        </h2>
      </div>
          <a className={styles.footerContainer}
            href="https://github.com/santiellis"
            target="_blank"
            rel="noopener noreferrer"
          >
        <footer className={styles.footer}>
            Made by Santiago Ellis
            <span className={styles.logo}>
            </span>
        </footer>
          </a>
      </div>
    </div>
  );
}
