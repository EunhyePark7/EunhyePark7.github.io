import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: 실제 메일 보내기 API 호출
    setStatus('메일이 성공적으로 전송되었습니다!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="이름" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="이메일" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="메시지" value={form.message} onChange={handleChange} required />
        <button type="submit">보내기</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
