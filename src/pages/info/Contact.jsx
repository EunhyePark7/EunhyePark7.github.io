import AppLayout from '@/components/AppLayout';
import ActionIcon from '@/components/ActionIcon';
import { Link } from 'react-router-dom';

const Contact = () => (
  <AppLayout>
    <div className="channel-page">
      <div className="page-intro">
        <Link to="/" className="text-link">
          <ActionIcon name="back" /> 채널 홈
        </Link>
      </div>
      <section className="collaboration">
        <div>
          <span className="eyebrow">LET'S MAKE SOMETHING GOOD</span>
          <h1>
            좋은 작업의 시작,
            <br />
            가벼운 인사부터.
          </h1>
          <p>eungkong333@gmail.com</p>
          <p>버튼을 누르면 사용 중인 이메일 앱이 열립니다.</p>
        </div>
        <a className="button button-primary" href="mailto:eungkong333@gmail.com">
          메일 보내기 <ActionIcon name="mail" />
        </a>
      </section>
    </div>
  </AppLayout>
);

export default Contact;
