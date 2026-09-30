import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://github.com/ksugiono187/jichang-tuijian.org/sitemap.xml',
  };
}
