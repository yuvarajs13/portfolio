import React from 'react'

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">YUVARAJ</h1>
      <h3 className="home__subtitle">App Developer</h3>
      <p className="home__description">
        Transforming ideas into responsive, scalable applications.<br />
        Specialized in React, TypeScript, and React Native.
      </p>
      <a href="mailto:yuvaraj93600@gmail.com"className="button button__flex">
        Say Hello
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="button__icon"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </a>
    </div>
  )
}


export default Data
