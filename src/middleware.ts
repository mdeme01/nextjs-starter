import { type NextRequest } from 'next/server';
import { getMiddlewareClient } from '~@supabase/client';

const middleware = async (request: NextRequest) => {
  const { supabase, response } = getMiddlewareClient(request);

  await supabase.auth.getSession();

  return response;
};

export { middleware };
