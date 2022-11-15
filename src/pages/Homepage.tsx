import { ReactElement, useRef } from 'react';
import styles from './Homepage.module.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
type HomepageProps = {};

export default function Homepage(props: HomepageProps): ReactElement {
  const elementRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.homepage } ref={elementRef}>
      Homepage
    </div>
  );
}