import {NextResponse} from "next/server"
import {getCard} from "../../../db/get"
import type {Card} from "../../../entity"

export async function GET(
  _request: Request,
  {params}: {params: {index: number}}
): Promise<NextResponse<Card>> {
  const data = await getCard(params.index)
  return NextResponse.json(data)
}
