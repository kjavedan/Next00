import { NextResponse } from "next/server"

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function GET(req: string) {
    
    const res = await fetch(DATA_SOURCE_URL)
    const todos: Todo[] = await res.json()
    if(!todos) return undefined

    return NextResponse.json(todos)
}