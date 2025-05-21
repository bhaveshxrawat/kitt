import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const params = url.searchParams;
  const requiredParams = ["whereFrom", "whereTo", "returnDt", "departureDt"];

  const hasAllParams = requiredParams.every(
    (param) => params.has(param) && params.get(param)
  );
  if (!hasAllParams) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // Continue to results if all params are present
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/results",
};
