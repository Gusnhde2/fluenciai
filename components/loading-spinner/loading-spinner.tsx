import Image from "next/image";
import LoadingSpinnerIcon from "@/public/loading-spinner.svg";

import styles from "./loading-spinner.module.css";

export default function LoadingSpinner({ size }: { size?: number }) {
  return (
    <div className={styles.loadingSpinner}>
      <Image
        src={LoadingSpinnerIcon}
        alt="Loading Spinner"
        width={size ? size : 18}
        height={size ? size : 18}
      />
    </div>
  );
}
