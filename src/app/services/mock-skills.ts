import {Skill} from '../shared/skill/skill';
import {SkillInterestEnum} from '../shared/skill/skill-interest.enum';
import {SkillLevelEnum} from '../shared/skill/skill-level.enum';
import {SkillTrend} from '../shared/skill/skill-trend';

export function getRandomColor(): String {
  return '#' +  ('000000' + Math.floor(0x1000000 * Math.random()).toString(16)).slice(-6);
}

export function getRandomTrendDatas(): SkillTrend[] {
  return [];
}

export const SKILLS: Skill[] = [new Skill('python',  SkillInterestEnum.HIGH, SkillLevelEnum.ROOKIE, getRandomColor(), getRandomTrendDatas())
  , new Skill('java',  SkillInterestEnum.HIGH,  SkillLevelEnum.PRACTICED, getRandomColor(), getRandomTrendDatas())
  , new Skill('java script', SkillInterestEnum.MEDIUM,  SkillLevelEnum.QUALIFIED, getRandomColor(), getRandomTrendDatas())
  , new Skill('scala',  SkillInterestEnum.HIGH,  SkillLevelEnum.ROOKIE, getRandomColor(), getRandomTrendDatas())
  , new Skill('kotlin',  SkillInterestEnum.HIGH,  SkillLevelEnum.ROOKIE, getRandomColor(), getRandomTrendDatas())
  , new Skill('nodejs',  SkillInterestEnum.HIGH,  SkillLevelEnum.QUALIFIED, getRandomColor(), getRandomTrendDatas())
  , new Skill('angularJs', SkillInterestEnum.LOW,  SkillLevelEnum.PRACTICED, getRandomColor(), getRandomTrendDatas())
  , new Skill('angular',  SkillInterestEnum.HIGH,  SkillLevelEnum.ROOKIE, getRandomColor(), getRandomTrendDatas())
];
