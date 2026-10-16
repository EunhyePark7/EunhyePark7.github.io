import ActionIcon from '@/components/ActionIcon';
import AppLayout from '@/components/AppLayout';
import Reveal from '@/components/MotionDetail';
import SkillIntro from '@/components/SkillIntro';
import { Link } from 'react-router-dom';

const GROUPS = [
  {
    title: 'Style & Markup',
    number: '01',
    description:
      '웹표준, 웹접근성, 크로스브라우징을 고려한 시맨틱 마크업과 반응형 화면 구현. SCSS와 다양한 스타일 설계 패턴으로 일관된 UI를 만듭니다.',
    skills: [
      ['HTML', 'html'],
      ['CSS', 'css'],
      ['SCSS', 'scss'],
      ['Tailwind CSS', 'tailwindcss'],
    ],
  },
  {
    title: 'Component Architecture',
    number: '02',
    description:
      '유지보수성과 확장성을 고려하는 컴포넌트 단위 개발. React, Vue, Next.js 환경에서 UI를 구현하고 상태와 로직의 구조를 고민합니다.',
    skills: [
      ['React', 'reactjs'],
      ['Next.js', 'nextjs'],
      ['Vue', 'vuejs'],
      ['JavaScript', 'javascript'],
      ['TypeScript', 'typescript'],
    ],
  },
  {
    title: 'UI & Collaboration',
    number: '03',
    description:
      '디자인 가이드를 화면으로 옮기는 디테일과 열린 소통. 디자인 협업 도구를 활용해 사용자의 입장에서 인터페이스를 완성합니다.',
    skills: [
      ['Figma', 'figma'],
      ['Zeplin', 'zeplin'],
      ['Photoshop', 'photoshop'],
      ['Adobe XD', 'xd'],
      ['Git', 'git'],
    ],
  },
];
const Skill = () => (
  <AppLayout>
    <div className="channel-page toolkit-page">
      <div className="page-intro">
        <Link to="/" className="text-link">
          <ActionIcon name="back" /> 채널 홈
        </Link>
        <span className="eyebrow">MY CREATIVE TOOLKIT</span>
      </div>
      <SkillIntro
        eyebrow="FROM IDEAS TO INTERFACES"
        firstLine="아이디어를 화면으로."
        firstEmphasis="화면으로"
        secondLine="디테일을 경험으로"
        emphasis="경험으로"
        description="화면을 만들고, 구조를 고민하고, 함께 더 나은 결과를 만듭니다."
      />
      <div className="toolkit-groups">
        {GROUPS.map((group, index) => (
          <Reveal index={index} interval={0.15} duration={0.2} key={group.number} className="toolkit-group">
            <span className="toolkit-number">{group.number}</span>
            <div>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
              <div className="toolkit-skills">
                {group.skills.map(([name, icon]) => (
                  <span key={name}>
                    <img src={`/assets/icons/${icon}.svg`} alt="" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal index={GROUPS.length} interval={0.15} duration={0.2} className="collaboration">
        <div>
          <span className="eyebrow">PUTTING THE TOOLKIT TO WORK</span>
          <h2>기술은 실제 작업에서 빛납니다</h2>
        </div>
        <Link to="/work" className="button button-primary">
          작업 살펴보기 <ActionIcon name="display" />
        </Link>
      </Reveal>
    </div>
  </AppLayout>
);

export default Skill;
