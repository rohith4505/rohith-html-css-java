import React from 'react'

export default function Form2({text,value,arr}) {
  return (
    <div>
      <form action="">
        <h1>{text}</h1>
        <p>{value}</p>
        <input type="number" className="number" value={value} />
        <p>{arr}
        </p>
      </form>
        </div>
  )
}
