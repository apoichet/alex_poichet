import {Skill} from '../model/skill/skill';
import {SkillInterestEnum} from '../model/skill/skillInterestEnum';
import {SkillLevelEnum} from '../model/skill/skillLevelEnum';
import {SkillLevel} from '../model/skill/skillLevel';
import {SkillInterest} from '../model/skill/skillInterest';

const LOW = new SkillInterest('Low', SkillInterestEnum.LOW);
const MEDIUM = new SkillInterest('Medium', SkillInterestEnum.MEDIUM);
const HIGH = new SkillInterest('High', SkillInterestEnum.HIGH);
export const SKILL_INTERESTS = [LOW, MEDIUM, HIGH];

const ROOKIE = new SkillLevel('Rookie', SkillLevelEnum.ROOKIE);
const QUALIFIED = new SkillLevel('Qualified', SkillLevelEnum.QUALIFIED);
const PRACTICED = new SkillLevel('Practiced', SkillLevelEnum.PRACTICED);
const SKILLFULL = new SkillLevel('Skill Full', SkillLevelEnum.SKILLFULL);
export const SKILL_LEVEL = [ROOKIE, QUALIFIED, PRACTICED, SKILLFULL];


export const SKILLS: Skill[] = [new Skill('python', HIGH, 4800, ROOKIE)
  , new Skill('java', HIGH, 3200, PRACTICED)
  , new Skill('java script', MEDIUM, 3100, QUALIFIED)
  , new Skill('scala', HIGH, 500, ROOKIE)
  , new Skill('kotlin', HIGH, 2000, ROOKIE)
  , new Skill('nodejs', HIGH, 700, QUALIFIED)
  , new Skill('angularJs', LOW, 200, PRACTICED)
  , new Skill('angular', HIGH, 1200, ROOKIE)
];
