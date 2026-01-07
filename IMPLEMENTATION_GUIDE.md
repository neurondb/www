# Implementation Guide - New Components

This guide shows how to use the newly implemented components to enhance your website.

## ✅ Implemented Components

### 1. Skip Navigation (`SkipNavigation`)
**Location**: Automatically included in root layout
**Purpose**: Accessibility feature for keyboard users
**Usage**: Already integrated - users can press Tab to see "Skip to main content" link

### 2. Scroll to Top Button (`ScrollToTop`)
**Location**: Automatically included in root layout
**Purpose**: Quick navigation back to top
**Usage**: Appears when user scrolls down 300px

### 3. Dark Mode Toggle (`DarkModeToggle`)
**Location**: Header component (desktop and mobile)
**Purpose**: User preference for theme
**Usage**: Click the sun/moon icon in header to toggle

### 4. Toast Notifications (`ToastProvider` & `useToast`)
**Location**: Root layout (wraps entire app)
**Purpose**: User feedback for actions
**Usage Example**:
```tsx
'use client'
import { useToast } from '@/components/ui/Toast'

export default function MyComponent() {
  const { showToast } = useToast()

  const handleAction = () => {
    // Show success toast
    showToast('Action completed successfully!', 'success')
    
    // Show error toast
    showToast('Something went wrong', 'error')
    
    // Show info toast
    showToast('Here is some information', 'info')
    
    // Show warning toast
    showToast('Please check this', 'warning')
  }

  return <button onClick={handleAction}>Do Something</button>
}
```

### 5. Skeleton Loaders (`Skeleton`, `SkeletonText`, `SkeletonCard`)
**Location**: `components/ui/Skeleton.tsx`
**Purpose**: Loading placeholders
**Usage Examples**:
```tsx
import { Skeleton, SkeletonText, SkeletonCard } from '@/components/ui/Skeleton'

// Single skeleton
<Skeleton className="h-10 w-full" />

// Text skeleton (3 lines)
<SkeletonText lines={3} />

// Card skeleton
<SkeletonCard />
```

### 6. Breadcrumbs (`Breadcrumbs`)
**Location**: `components/Breadcrumbs.tsx`
**Purpose**: Navigation hierarchy
**Usage Example**:
```tsx
import Breadcrumbs from '@/components/Breadcrumbs'

export default function MyPage() {
  const breadcrumbs = [
    { label: 'Docs', href: '/docs' },
    { label: 'Getting Started', href: '/docs/getting-started' },
    { label: 'Installation' }, // Current page, no href
  ]

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
      {/* Your page content */}
    </div>
  )
}
```

### 7. Global Loading State (`app/loading.tsx`)
**Location**: `app/loading.tsx`
**Purpose**: Shows while pages are loading
**Usage**: Automatically used by Next.js for route transitions

## 🎨 Styling Notes

### Dark Mode
The dark mode toggle uses CSS classes. Make sure your components support dark mode:
```tsx
// Example component with dark mode support
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  Content
</div>
```

### Animations
Smooth animations are included in `globals.css`. Components use Tailwind's transition classes.

## 📝 Next Steps

### To Add Breadcrumbs to Pages:

1. **Blog Post Page** (`app/blog/[slug]/page.tsx`):
```tsx
const breadcrumbs = [
  { label: 'Blog', href: '/blog' },
  { label: post.title },
]
```

2. **Docs Pages** (`app/docs/**/page.tsx`):
```tsx
const breadcrumbs = [
  { label: 'Docs', href: '/docs' },
  { label: 'Section', href: '/docs/section' },
  { label: 'Current Page' },
]
```

3. **Tutorial Pages** (`app/tutorials/[slug]/page.tsx`):
```tsx
const breadcrumbs = [
  { label: 'Tutorials', href: '/tutorials' },
  { label: tutorial.title },
]
```

### To Use Toast Notifications:

Add to any form submission, API call, or user action:
```tsx
// In a form component
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await submitForm()
    showToast('Form submitted successfully!', 'success')
  } catch (error) {
    showToast('Failed to submit form', 'error')
  }
}
```

### To Add Loading States:

1. **Route-level loading**: Create `loading.tsx` in any route folder
2. **Component-level loading**: Use Skeleton components
3. **Suspense boundaries**: Wrap async components

Example:
```tsx
import { Suspense } from 'react'
import { SkeletonCard } from '@/components/ui/Skeleton'

export default function Page() {
  return (
    <Suspense fallback={<SkeletonCard />}>
      <AsyncComponent />
    </Suspense>
  )
}
```

## 🔧 Configuration

### Toast Duration
Default is 5000ms. Customize per toast:
```tsx
showToast('Message', 'success', 3000) // 3 seconds
showToast('Message', 'info', 0) // No auto-dismiss
```

### Scroll to Top Threshold
Currently set to 300px. Modify in `ScrollToTop.tsx`:
```tsx
if (window.scrollY > 300) { // Change this value
```

## 🚀 Performance Tips

1. **Lazy load heavy components**: Use dynamic imports
2. **Optimize images**: Already using Next.js Image component
3. **Code splitting**: Next.js handles this automatically
4. **Prefetch links**: Add `prefetch` prop to important links

## 📱 Mobile Considerations

All components are mobile-responsive:
- Dark mode toggle appears in mobile menu
- Scroll to top button is touch-friendly (44x44px minimum)
- Breadcrumbs wrap on small screens
- Toast notifications stack on mobile

## ♿ Accessibility

All components follow WCAG 2.1 AA standards:
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators
- ✅ ARIA labels
- ✅ Semantic HTML

## 🐛 Troubleshooting

### Dark mode not working?
- Check if `dark` class is added to `<html>` element
- Verify Tailwind dark mode is configured in `tailwind.config.js`

### Toast not showing?
- Ensure component is wrapped in `<ToastProvider>`
- Check that `useToast` is called in a client component (`'use client'`)

### Skeleton not animating?
- Verify Tailwind is processing the animation classes
- Check browser DevTools for CSS conflicts

