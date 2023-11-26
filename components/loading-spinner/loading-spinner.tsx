import Image from "next/image";
import LoadingSpinnerIcon from "@/public/loading-spinner.svg";

import styles from "./loading-spinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.loadingSpinner}>
      <Image
        src={LoadingSpinnerIcon}
        alt="Loading Spinner"
        width={18}
        height={18}
      />
    </div>
  );
}
