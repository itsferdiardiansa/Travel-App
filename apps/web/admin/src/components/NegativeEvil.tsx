import React from 'react'

export default function Evil() {
  const unsafe = eval('2 + 2')

  return <div>Result: {unsafe}</div>
}
