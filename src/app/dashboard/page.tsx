import { options } from '@app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

const Dashboard = async (): Promise<JSX.Element> => {
  const session = await getServerSession(options);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome {session?.user?.name}!</p>
      <a href="/api/auth/signout">Sign out</a>
    </>
  );
};

export default Dashboard;
