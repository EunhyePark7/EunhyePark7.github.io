import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ContactFormModal = ({ isOpen, onClose }) => {
  const formRef = useRef(null);
  const modalContentRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = e => {
    e.preventDefault();
    setIsSending(true);

    if (!formRef.current) return;
    console.log(emailjs);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current)
      .then(() => {
        setStatusMessage('메일이 성공적으로 전송되었습니다!');
        formRef.current.reset();
        setIsSending(false);
        onClose();
      })
      .catch(() => {
        setStatusMessage('메일 전송에 실패했습니다. 다시 시도해주세요.');
        setIsSending(false);
      });
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('click', handleClickOutside, { capture: true });
    return () =>
      document.removeEventListener('click', handleClickOutside, {
        capture: true,
      });
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent ref={modalContentRef}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Contact Me</h2>
        <form ref={formRef} onSubmit={sendEmail}>
          <label>
            이름:
            <input type="text" name="user_name" required />
          </label>
          <label>
            이메일:
            <input type="email" name="user_email" required />
          </label>
          <label>
            메시지:
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit" disabled={isSending}>
            {isSending ? '전송 중...' : '메일 보내기'}
          </button>
          {statusMessage && <p>{statusMessage}</p>}
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactFormModal;

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    input,
    textarea {
      width: 100%;
      padding: 8px;
      font-size: 14px;
    }

    button {
      padding: 10px;
      background-color: black;
      color: white;
      border: none;
      cursor: pointer;
    }

    p {
      margin-top: 8px;
      font-size: 14px;
      color: green;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 12px;
  font-size: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
