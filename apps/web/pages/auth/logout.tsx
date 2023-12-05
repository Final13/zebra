import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppConfig } from '@/rckit/app/AppConfig/useAppConfig';

export default function AuthLogoutPage() {
  const { clearSession } = useAppConfig();

  const router = useRouter();

  useEffect(() => {
    clearSession();
    router.push('/');
  }, [router, clearSession]);

  return null; // This can be an empty component or your loading indicator
}
