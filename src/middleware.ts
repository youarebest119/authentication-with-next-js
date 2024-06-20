import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const auth = request.cookies.get('auth')

    if (auth?.value && path.startsWith("/auth")) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    else if(!path.startsWith("/auth") && !auth?.value) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}