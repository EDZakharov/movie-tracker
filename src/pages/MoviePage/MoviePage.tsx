/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, useEffect, useState } from 'react';

const getUsers = () =>
  fetch('http://localhost:3000/users')
    .then((users) => users.json())
    .then((users) => {
      if (users.length) {
        return users;
      }
      return [];
    });

const LazyMovieCart = lazy(() => import('../../shared/ui/MovieCart'));

export default function MoviePage() {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    getUsers().then((movie) => {
      if (movie) {
        setUsers(movie);
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1>MoviePage</h1>
      <div className="md:columns-1 lg:columns-2 xl:columns-3 2xl:columns-4 3xl:columns-5">
        {users.map((user: any) => (
          <LazyMovieCart key={user.id} movieSrc={user.imageSrcUrl} />
        ))}
      </div>
    </div>
  );
}
