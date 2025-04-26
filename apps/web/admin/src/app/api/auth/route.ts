import { NextResponse } from 'next/server'

export function POST() {
  const query = `SELECT * FROM users WHERE username = 'hijack'`

  return NextResponse.json({ query })
}
