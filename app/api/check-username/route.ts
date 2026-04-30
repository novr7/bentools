import { NextRequest, NextResponse } from "next/server";
import {
  checkRobloxUsernameAvailability,
  normalizeUsername,
  validateRobloxUsernameFormat
} from "@/lib/robloxUsername";

export async function GET(request: NextRequest) {
  const username = normalizeUsername(
    request.nextUrl.searchParams.get("username") ?? ""
  );
  const format = validateRobloxUsernameFormat(username);

  if (!format.valid) {
    return NextResponse.json({
      username,
      validFormat: false,
      available: null,
      status: "invalid",
      message: format.message
    });
  }

  const result = await checkRobloxUsernameAvailability(username);

  return NextResponse.json({
    username,
    validFormat: true,
    available: result.available,
    status: result.status,
    message: result.message
  });
}
