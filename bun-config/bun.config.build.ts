import { copyFiles, isProduction } from './bun.config';
import { styleScss } from './bun.plugins';

await Bun.build({
    entrypoints: ['./src/scripts/main.ts'],
    outdir: './dist/static',
    naming: 'index.[ext]',
    target: 'node',
    minify: isProduction
});

await Bun.build({
    entrypoints: ['./src/styles/main.scss'],
    outdir: './dist/static',
    naming: '[name].css',
    minify: isProduction,
    loader: { '.scss': 'css' },
    plugins: [styleScss]
});

await copyFiles(['./src/assets/favicon.ico'], './dist/static');

await copyFiles(['./src/index.html'], './dist');
