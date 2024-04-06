import {NextResponse} from "next/server"
import {getArcana} from "../../db/get"
import type {Arcanum} from "../../entity"

export async function GET(): Promise<NextResponse<Arcanum[]>> {
  const data = await getArcana()
  return NextResponse.json(data)
}
