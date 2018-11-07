import {Skill} from '../shared/skill/skill';
import {SkillInterestEnum} from '../shared/skill/skill-interest.enum';
import {SkillLevelEnum} from '../shared/skill/skill-level.enum';
import {SkillTrend} from '../shared/skill/skill-trend';

export function getRandomColor(): String {
  return '#' +  ('000000' + Math.floor(0x1000000 * Math.random()).toString(16)).slice(-6);
}

export function randomValue(): number {
  return Math.round(Math.random() * 100);
}

export function mockDates(): Date[] {
  return [new Date(2018, 1, 15),
    new Date(2018, 2, 15),
    new Date(2018, 3, 15),
    new Date(2018, 4, 15),
    new Date(2018, 5, 15),
    new Date(2018, 6, 15),
    new Date(2018, 7, 15),
    new Date(2018, 8, 15),
    new Date(2018, 9, 15),
    new Date(2018, 10, 15),
    new Date(2018, 11, 15),
    new Date(2018, 12, 15)];
}

export function getRandomTrendDatas(): SkillTrend[] {
  return [new SkillTrend([randomValue()], mockDates()[0]),
    new SkillTrend([randomValue()], mockDates()[1]),
    new SkillTrend([randomValue()], mockDates()[2]),
    new SkillTrend([randomValue()], mockDates()[3]),
    new SkillTrend([randomValue()], mockDates()[4]),
    new SkillTrend([randomValue()], mockDates()[5]),
    new SkillTrend([randomValue()], mockDates()[6]),
    new SkillTrend([randomValue()], mockDates()[7]),
    new SkillTrend([randomValue()], mockDates()[8]),
    new SkillTrend([randomValue()], mockDates()[9]),
    new SkillTrend([randomValue()], mockDates()[10]),
    new SkillTrend([randomValue()], mockDates()[11])];
}

export const SKILLS: Skill[] = [new Skill('python',  SkillInterestEnum.High, SkillLevelEnum.Rookie, getRandomColor(), getRandomTrendDatas())
  , new Skill('java',  SkillInterestEnum.High,  SkillLevelEnum.Practiced, getRandomColor(), getRandomTrendDatas())
  , new Skill('java script', SkillInterestEnum.Medium,  SkillLevelEnum.Qualified, getRandomColor(), getRandomTrendDatas())
  , new Skill('scala',  SkillInterestEnum.High,  SkillLevelEnum.Rookie, getRandomColor(), getRandomTrendDatas())
  , new Skill('kotlin',  SkillInterestEnum.High,  SkillLevelEnum.Rookie, getRandomColor(), getRandomTrendDatas())
  , new Skill('nodejs',  SkillInterestEnum.High,  SkillLevelEnum.Qualified, getRandomColor(), getRandomTrendDatas())
  , new Skill('angularJs', SkillInterestEnum.Low,  SkillLevelEnum.Practiced, getRandomColor(), getRandomTrendDatas())
  , new Skill('angular',  SkillInterestEnum.High,  SkillLevelEnum.Rookie, getRandomColor(), getRandomTrendDatas())
];
