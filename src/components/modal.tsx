import ModalCSS from '../css/components/Modal.module.scss';

const Modal: React.FC = () => {
    return (
        <div className={ModalCSS.modal}>
            <div className={ModalCSS.modalContent}>
                <h2>Hi there</h2>
                <p>I am a skilled Rails and React developer looking for new opportunities and this is my page.</p>
                <div className={ModalCSS.links}>
                    <a href="">About me</a>
                    <a href="">Resume</a>
                    <a href="https://www.linkedin.com/in/jonathanl33">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Modal;