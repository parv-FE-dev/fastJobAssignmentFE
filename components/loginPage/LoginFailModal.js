import styles from "./LoginFailModal.module.scss";

function LoginFailModal({ shown, close }) {

    if(shown) {
        setTimeout(() => {
            close();
        }, 3000)
    }
  return shown ? (
    <div
      className={`${styles.modalBackdrop}`}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        Please check your username and password
      </div>
    </div>
  ) : null;
}

export default LoginFailModal;
