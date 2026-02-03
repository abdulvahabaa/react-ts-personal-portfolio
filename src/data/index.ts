// Barrel file: re-export all data from a single entry point

export { default as confettiData } from './confetti.json';
export { galleryData } from './gallery';
export { experiences } from './experiences';
export { education } from './education';
export { services } from './services';
export type { ServiceItem } from './services';
export { skills } from './skills';
export type { SkillItem } from './skills';
export { projects } from './projects';
export type { ProjectItem, TechStackItem } from './projects';
export { certifications } from './certifications';
export type { CertificationItem } from './certifications';
export { navLinks, socialLinks } from './links';
export type { NavLinkItem, SocialLinkItem } from './links';
export {
  whoAmICard,
  whatIDoCard,
  myGoalsCard,
  myPhilosophyCard,
} from './aboutCards';
export type { AboutCardItem } from './aboutCards';
