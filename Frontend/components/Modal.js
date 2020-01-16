import styles from "../styles/Modal.module.css";

const Modal = ({ showModal, setShowModal }) => {

  const onCloseModal = () => {
    setShowModal(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  }

  if (showModal) {
    return (
      <div className={styles.modalContainer} onClick={onCloseModal}>
        <div className={styles.modal} onClick={stopPropagation}>
          <h3>{showModal}</h3>
          <button className={styles.button} onClick={onCloseModal}>Ok</button>
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
