import AppLayout from '@/components/AppLayout';
import Dkbmc from '@/components/Company/Dkbmc';
import GoodRich from '@/components/Company/GoodRich';
import Pixdine from '@/components/Company/Pixdine';

const WorkExperience = () => {
  return (
    <AppLayout>
      <h1>WorkExperience page</h1>
      <GoodRich />
      <Pixdine />
      <Dkbmc />
    </AppLayout>
  );
};

export default WorkExperience;
