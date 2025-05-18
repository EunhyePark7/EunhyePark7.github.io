import { media } from '@/styles/media';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

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
    <StyledModal>
      <StyledModalContainer ref={modalContentRef}>
        <StyledCloseButton onClick={onClose}>
          <Icon type="ai" iconName="AiOutlineClose" />
        </StyledCloseButton>
        <form ref={formRef} onSubmit={sendEmail}>
          <StyledInner>
            <StyledHeader>
              <StyledItem>
                <label>보내는 사람</label>
                <input type="email" name="user_name" required />
              </StyledItem>
              <StyledItem>
                <label>제목</label>
                <input type="text" name="title" required />
              </StyledItem>
            </StyledHeader>
            <StyledBody>
              <StyledItem>
                <label>내용</label>
                <StyledTextarea>
                  <textarea name="content" rows="9" cols="40" maxlength="500" required />
                </StyledTextarea>
              </StyledItem>
            </StyledBody>
            <StyledFooter>
              <StyledButton type="submit" disabled={isSending}>
                {isSending ? '전송 중...' : '메일 보내기'}
              </StyledButton>
            </StyledFooter>
          </StyledInner>
        </form>
      </StyledModalContainer>
    </StyledModal>
  );
};

export default ContactFormModal;

const StyledModal = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 110;
  background-color: rgba(0, 0, 0, 0.4);
`;
const StyledCloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 14px;
`;
const StyledModalContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 500px;
  height: 60%;
  padding: 36px 20px 20px;
  border-radius: 20px;
  background-color: #fff;
  z-index: 111;
  form {
    height: 100%;
  }
  @media ${media.mobile} {
    width: 90%;
    height: 75%;
  }
`;
const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledHeader = styled.div``;
const StyledBody = styled.div`
  height: 100%;
  margin-top: 20px;
  > div {
    height: 100%;
  }
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  @media ${media.mobile} {
    justify-content: center;
  }
`;
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  &:nth-child(1) {
    margin-top: 0;
  }
  label {
    font-weight: 500;
    margin-bottom: 10px;
  }
  input {
    display: block;
    height: 40px;
    padding: 0 10px;
    border: 1px solid var(--icon-disabled);
    border-radius: 10px;
  }
`;
const StyledTextarea = styled.div`
  height: 100%;
  padding: 0 10px;
  border: 1px solid var(--icon-disabled);
  border-radius: 10px;
  textarea {
    width: 100%;
    padding: 5px 10px;
    resize: none;
  }
`;
const StyledButton = styled.button`
  height: 40px;
  padding: 0 10px;
  border: 1px solid var(--icon-disabled);
  border-radius: 10px;
  @media ${media.mobile} {
    width: 100%;
  }
`;
