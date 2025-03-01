import type { SocialLink } from './global';

export interface Social extends Omit<SocialLink, 'ariaLabel'> {
  name: string;
}
