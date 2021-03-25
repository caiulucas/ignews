import { signIn, useSession } from 'next-auth/client';
import { useCallback } from 'react';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = () => {
  const [session] = useSession();

  const handleSubscribe = useCallback(() => {
    if (!session) {
      signIn('github');
    }
  }, [session]);
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
};
