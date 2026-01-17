import { gsap } from 'gsap';

/**
 * Animation configuration types
 */
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
}

/**
 * Get the total length of an SVG path element
 */
export function getPathLength(pathElement: SVGPathElement | null): number {
  if (!pathElement) return 0;
  try {
    return pathElement.getTotalLength();
  } catch {
    return 0;
  }
}

/**
 * Animate a stroke path drawing effect
 * Uses stroke-dasharray and stroke-dashoffset to create a drawing animation
 */
export function animateStrokePath(
  pathElement: SVGPathElement | null,
  config: AnimationConfig = {}
): gsap.core.Tween | null {
  if (!pathElement) return null;

  const {
    duration = 2,
    delay = 0,
    ease = 'power2.out',
  } = config;

  const pathLength = getPathLength(pathElement);
  
  if (pathLength === 0) return null;

  // Set initial state
  gsap.set(pathElement, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
  });

  // Animate to final state
  return gsap.to(pathElement, {
    strokeDashoffset: 0,
    duration,
    delay,
    ease,
  });
}

/**
 * Fade in an SVG element or group
 */
export function fadeInGroup(
  element: SVGElement | null,
  config: AnimationConfig = {}
): gsap.core.Tween | null {
  if (!element) return null;

  const {
    duration = 0.6,
    delay = 0,
    ease = 'power2.out',
  } = config;

  // Set initial state
  gsap.set(element, {
    opacity: 0,
  });

  // Animate fade in
  return gsap.to(element, {
    opacity: 1,
    duration,
    delay,
    ease,
  });
}

/**
 * Fade in with slide up effect
 */
export function fadeInSlideUp(
  element: SVGElement | null,
  config: AnimationConfig = {}
): gsap.core.Tween | null {
  if (!element) return null;

  const {
    duration = 0.6,
    delay = 0,
    ease = 'power2.out',
  } = config;

  // Set initial state
  gsap.set(element, {
    opacity: 0,
    y: 20,
  });

  // Animate fade in with slide
  return gsap.to(element, {
    opacity: 1,
    y: 0,
    duration,
    delay,
    ease,
  });
}

/**
 * Reveal elements in sequence with stagger
 */
export function stagedReveal(
  elements: SVGElement[],
  config: AnimationConfig = {}
): gsap.core.Timeline | null {
  if (!elements || elements.length === 0) return null;

  const {
    duration = 0.6,
    delay = 0,
    stagger = 0.1,
    ease = 'power2.out',
  } = config;

  // Set initial state for all elements
  gsap.set(elements, {
    opacity: 0,
    y: 20,
  });

  // Create timeline for sequenced animation
  const tl = gsap.timeline({ delay });
  
  tl.to(elements, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    ease,
  });

  return tl;
}

/**
 * Reset animations on an SVG element or group of elements
 */
export function resetAnimations(elements: SVGElement | SVGElement[]): void {
  const elementsArray = Array.isArray(elements) ? elements : [elements];
  
  elementsArray.forEach((element) => {
    // Reset GSAP properties
    gsap.set(element, {
      clearProps: 'all',
    });
    
    // Reset stroke animations
    if (element instanceof SVGPathElement) {
      element.style.strokeDasharray = '';
      element.style.strokeDashoffset = '';
    }
  });
}

/**
 * Animate SVG elements based on data attributes
 * Supports: data-animate="stroke|fade|slide", data-delay="number"
 */
export function animateFromAttributes(
  svgElement: SVGSVGElement | null
): gsap.core.Timeline[] {
  if (!svgElement) return [];

  const timelines: gsap.core.Timeline[] = [];
  
  // Find all elements with data-animate attribute
  const animatedElements = svgElement.querySelectorAll('[data-animate]');
  
  animatedElements.forEach((element) => {
    if (!(element instanceof SVGElement)) return;

    const animateType = element.getAttribute('data-animate');
    const delayAttr = element.getAttribute('data-delay');
    const delay = delayAttr ? parseFloat(delayAttr) : 0;

    let timeline: gsap.core.Timeline | gsap.core.Tween | null = null;

    switch (animateType) {
      case 'stroke':
        if (element instanceof SVGPathElement) {
          timeline = animateStrokePath(element, { delay });
        }
        break;
      
      case 'fade':
        timeline = fadeInGroup(element, { delay });
        break;
      
      case 'slide':
        timeline = fadeInSlideUp(element, { delay });
        break;
      
      default:
        // Default to fade for any unrecognized type
        timeline = fadeInGroup(element, { delay });
    }

    if (timeline && timeline instanceof gsap.core.Timeline) {
      timelines.push(timeline);
    }
  });

  return timelines;
}

/**
 * Create a master timeline that coordinates all animations
 */
export function createMasterTimeline(
  svgElement: SVGSVGElement | null,
  onComplete?: () => void
): gsap.core.Timeline {
  const master = gsap.timeline({ onComplete });
  
  if (!svgElement) return master;

  // Find elements grouped by animation type for better coordination
  const paths = Array.from(svgElement.querySelectorAll('[data-animate="stroke"]')) as SVGPathElement[];
  const fadeElements = Array.from(svgElement.querySelectorAll('[data-animate="fade"]')) as SVGElement[];
  const slideElements = Array.from(svgElement.querySelectorAll('[data-animate="slide"]')) as SVGElement[];

  // Animate paths first (if any)
  if (paths.length > 0) {
    const pathTimeline = gsap.timeline();
    paths.forEach((path, index) => {
      const delay = parseFloat(path.getAttribute('data-delay') || '0') + (index * 0.1);
      animateStrokePath(path, { delay, duration: 1.5 });
    });
    master.add(pathTimeline);
  }

  // Animate fade elements with stagger
  if (fadeElements.length > 0) {
    stagedReveal(fadeElements, { stagger: 0.1, delay: paths.length > 0 ? 0.5 : 0 });
  }

  // Animate slide elements with stagger
  if (slideElements.length > 0) {
    const slideDelay = paths.length > 0 ? 0.7 : (fadeElements.length > 0 ? 0.3 : 0);
    stagedReveal(slideElements, { stagger: 0.15, delay: slideDelay });
  }

  return master;
}
