import "./Modal.scss";

const Modal = ({ children, visible = true, onCloseModal }) => {
  return (
    <>
      {visible ? (
        <div onClick={onCloseModal} className="Modal">
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
