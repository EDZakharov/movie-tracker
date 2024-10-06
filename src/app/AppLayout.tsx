import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const LinkStyle =
  'bg-purple-400 text-white rounded px-2 py-1 hover:bg-purple-500';

export const AppLayout = () => {
  return (
    <>
      <header className=" bg-slate-500 ">
        <nav className="gap-2 flex ">
          <Link to="/home" className={LinkStyle}>
            Home
          </Link>
          <Link to="/movie" className={LinkStyle}>
            Movies
          </Link>
        </nav>
      </header>
      <section>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </section>
      <footer></footer>
    </>
  );
};
