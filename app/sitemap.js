const URL = 'https://hakanokay.dev';

const ROUTES = [''];

export default async function sitemap() {
  const routes = ROUTES.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes];
}
