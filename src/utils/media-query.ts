type BreakPoint = 'sm' | 'md' | 'lg' | 'xl';

const breakPoints: Record<BreakPoint, string> = {
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '75rem',
};

/**
 * Break point names and values inspired from this:
 * https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
 * @param bp BreakPoint reflecting the screen size
 * @returns a media query string
 */
const mediaQuery = (bp: BreakPoint): string =>
  `@media (min-width: ${breakPoints[bp]})`;

export default mediaQuery;
