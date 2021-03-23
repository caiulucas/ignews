import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = () => (
  <button type="button" className={styles.subscribeButton}>
    Subscribe now
  </button>
);
