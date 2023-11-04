import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getServerClient } from '~@supabase/client';

const handler = async (request: Request) => {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const cookieStore = cookies();
    const supabase = getServerClient(cookieStore);
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(requestUrl.origin);
};

export { handler as GET };
