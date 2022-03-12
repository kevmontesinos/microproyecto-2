import imagen from "./loadingSpinner.gif";
import styles from "./LoadingSpinner.module.css"

function LoadingSpinner() {
    return (
        <div className={styles.container}>
            <img width="100px" src={imagen} />
        </div>);
}

export default LoadingSpinner;