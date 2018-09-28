import {Skin} from '../model/skin/skin';
import {SkinInterestEnum} from '../model/skin/skinInterestEnum';
import {SkinLevelEnum} from '../model/skin/skinLevelEnum';
import {SkinLevel} from '../model/skin/skinLevel';
import {SkinInterest} from '../model/skin/skinInterest';

const LOW = new SkinInterest("Low", SkinInterestEnum.LOW);
const MEDIUM = new SkinInterest("Medium", SkinInterestEnum.MEDIUM);
const HIGH = new SkinInterest("High", SkinInterestEnum.HIGH);
export const SKIN_INTERESTS = [LOW, MEDIUM, HIGH];

const ROOKIE = new SkinLevel("Rookie", SkinLevelEnum.ROOKIE);
const QUALIFIED = new SkinLevel("Qualified", SkinLevelEnum.QUALIFIED);
const PRACTICED = new SkinLevel("Practiced", SkinLevelEnum.PRACTICED);
const SKILLFULL = new SkinLevel("Skill Full", SkinLevelEnum.SKILLFULL);
export const SKIN_LEVEL = [ROOKIE, QUALIFIED, PRACTICED, SKILLFULL];


export const SKINS: Skin[] = [new Skin('python', HIGH, 4800, ROOKIE)
, new Skin('java', HIGH, 3200, PRACTICED)
, new Skin('java script', MEDIUM, 3100, QUALIFIED)
, new Skin('scala', HIGH, 500, ROOKIE)
, new Skin('kotlin', HIGH, 2000, ROOKIE)
, new Skin('nodejs', HIGH, 700, QUALIFIED)
, new Skin('angularJs', LOW, 200, PRACTICED)
, new Skin('angular', HIGH, 1200, ROOKIE)
];
