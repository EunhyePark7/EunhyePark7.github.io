import AppLayout from '@/components/AppLayout';
import Dkbmc from '@/components/Company/Dkbmc';
import GoodRich from '@/components/Company/GoodRich';
import Pixdine from '@/components/Company/Pixdine';

/**
 * 회사 이력
 * https://www.google.com/search?q=%ED%9A%8C%EC%82%AC+%EC%97%B0%ED%98%81&oq=%ED%9A%8C%EC%82%AC+%EC%97%B0%ED%98%81&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDIzMjdqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#vhid=lVDiwmuobgRzPM&vssid=_O-C6Z6GIKICh1e8PypqB4A4_44
 */
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
