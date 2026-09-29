# Hostinger deployment

This project is configured to run as a standard Next.js Node.js application on Hostinger Web App hosting.

## Recommended deployment

1. In Hostinger, go to **Websites → Add Website → Deploy Web App**.
2. Choose **Import Git Repository**.
3. Select `rathoreanant98-eng/thai-spa-website`.
4. Deploy from branch `main`.
5. Use Node.js `22.x`.
6. Keep the root directory as `./`.
7. Use npm as the package manager.
8. Build command: `npm run build`.
9. Start command: `npm run start`.
10. If Hostinger detects Next.js automatically, keep the detected Next.js framework preset. If it shows **Other**, use `.next` as the output directory and the build/start commands above.

Hostinger installs dependencies during deployment.

## Automatic deployments

Keep Hostinger auto-deployment enabled. Every push to `main` can then build and redeploy the latest version automatically.

## Important before public launch

Replace all placeholders in `src/data/business.ts` with verified business details and replace temporary abstract visuals with authentic assets where appropriate.


## Production domain / SEO environment variable

After the final domain is connected in Hostinger, add this environment variable to the Web App deployment:

```
NEXT_PUBLIC_SITE_URL=https://www.your-real-domain.com
```

Use the final HTTPS origin only, with no path. This enables absolute URLs in `sitemap.xml`, the sitemap reference in `robots.txt`, and business structured data. Until a real domain and brand details are configured, the app intentionally avoids publishing fabricated local-business structured data.

After adding or changing the environment variable, redeploy the application.
