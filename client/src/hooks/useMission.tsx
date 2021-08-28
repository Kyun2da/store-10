import { useState } from 'react';
import { IMissionList } from '@/types';

const useMission = (): [
  IMissionList,
  (keys: keyof IMissionList, values: boolean) => void,
  string | null
] => {
  const localMission = JSON.parse(localStorage.getItem('mission') || '{}');
  const recentMission = localStorage.getItem('recentMission');
  const [missionList, setMissionList] = useState(localMission);

  const onChangeMissionList = (keys: keyof IMissionList, values: boolean) => {
    const newMissionList = { ...missionList, [keys]: values };
    setMissionList(newMissionList);
    localStorage.setItem('mission', JSON.stringify(newMissionList));
    localStorage.setItem('recentMission', keys);
  };

  return [missionList, onChangeMissionList, recentMission];
};

export default useMission;
