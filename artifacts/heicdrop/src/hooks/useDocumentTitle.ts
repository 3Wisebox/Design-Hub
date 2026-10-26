import { useEffect } from 'react';

function setMetaContent(attribute: 'name' | 'property', key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = value;
}

export function useDocumentTitle(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    setMetaContent('name', 'description', description);
    setMetaContent('property', 'og:title', title);
    setMetaContent('property', 'og:description', description);
    setMetaContent('property', 'og:type', 'website');
    setMetaContent('name', 'twitter:card', 'summary');
    setMetaContent('name', 'twitter:title', title);
    setMetaContent('name', 'twitter:description', description);

    const routePath = window.location.pathname.replace(/\/+$/, '') || '/';
    const configuredSiteUrl = import.meta.env.VITE_SITE_URL;
    const canonicalUrl = new URL(
      routePath,
      configuredSiteUrl || window.location.origin,
    ).toString();
    setMetaContent('property', 'og:url', canonicalUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description]);
}
