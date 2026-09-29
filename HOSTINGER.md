# Hostinger deployment

This project is configured with `output: 'export'`, so `npm run build` produces a static site in `out/`.

## Recommended Hostinger flow

1. Create a Node.js Web App in Hostinger.
2. Connect the GitHub repository.
3. Let Hostinger detect Next.js, or set the build command to `npm run build`.
4. If Hostinger asks for a static output directory, use `out`.
5. Deploy.

Every future push to the connected branch can trigger a new deployment.

## Alternative static hosting flow

If using Hostinger's plain HTML/static Git deployment rather than Node.js deployment, the hosting flow must publish the generated `out/` directory rather than the TypeScript source tree. The Node.js Web App flow is simpler because Hostinger can install dependencies and build the app automatically.

## Important

Do not consider the site production-ready until `src/data/business.ts` contains real contact/location/hours data and the abstract visual placeholders have been replaced where real facility photography is required.
