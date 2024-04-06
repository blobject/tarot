import {NextResponse} from "next/server"
import {getArcanum} from "../../../db/get"
import type {Arcanum} from "../../../entity"

export async function GET(
  _request: Request,
  {params}: {params: {name: string}}
): Promise<NextResponse<Arcanum>> {
  const data = await getArcanum(params.name)
  return NextResponse.json(data)
}
