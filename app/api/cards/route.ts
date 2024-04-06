import {NextResponse} from "next/server"
import {getCards} from "../../db/get"
import type {Card} from "../../entity"

export async function GET(): Promise<NextResponse<Card[]>> {
  const data = await getCards()
  return NextResponse.json(data)
}
