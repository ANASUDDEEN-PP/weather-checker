import React from 'react';
import style from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={style.headerMain}>
        <p className={style.headerText}>Weather Checker</p>
      </div>
    </>
  );
}
