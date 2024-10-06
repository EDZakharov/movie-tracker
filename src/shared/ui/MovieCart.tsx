import { useInView } from 'react-intersection-observer';

export default function MovieCart({ movieSrc }: { movieSrc: string }) {
  const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: true });

  return (
    <div
      className="bg-fuchsia-900 min-w-[350px] max-w-[350px] rounded-lg overflow-hidden mb-4 "
      ref={ref}
    >
      {inView ? (
        <div className="relative">
          <div className="">
            <img
              src={movieSrc}
              alt={movieSrc}
              className="object-fill h-72 w-[450px]"
            />
          </div>
          <div className="w-full flex justify-between px-4 py-2 bottom-2 absolute">
            <span>Rating ****</span>
            <span>Reviews</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
