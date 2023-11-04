import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerClient } from '~@supabase/client';

const Home = async () => {
  const cookieStore = cookies();
  const supabase = getServerClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    'use server';

    const cookieStore = cookies();
    const supabase = getServerClient(cookieStore);
    await supabase.auth.signOut();
    return redirect('/');
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline">
          Sign out
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/auth/signin"
      className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 no-underline"
    >
      Sign in
    </Link>
  );
};

export default Home;
