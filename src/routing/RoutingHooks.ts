import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function useOnRouteChange(handler: VoidFunction) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handlerRef = useRef<VoidFunction>(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    return () => {
      handlerRef.current();
    };
  }, [pathname, searchParams]);
}
