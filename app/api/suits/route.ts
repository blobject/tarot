import {NextResponse} from "next/server"
import {getSuits} from "../../db/get"
import type {Suit} from "../../entity"

export async function GET(): Promise<NextResponse<Suit[]>> {
  const data = await getSuits()
  return NextResponse.json(data)
}
