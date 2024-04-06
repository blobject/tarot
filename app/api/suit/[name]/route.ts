import {NextResponse} from "next/server"
import {getSuit} from "../../../db/get"
import type {Suit} from "../../../entity"

export async function GET(
  _request: Request,
  {params}: {params: {name: string}}
): Promise<NextResponse<Suit>> {
  const data = await getSuit(params.name)
  return NextResponse.json(data)
}
