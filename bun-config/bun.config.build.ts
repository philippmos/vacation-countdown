import { copyFiles, isProduction } from './bun.config';
import { styleScss } from './bun.plugins';

await Bun.build({
    entrypoints: ['./src/main.ts'],
    outdir: './dist',
    naming: 'index.[ext]',
    target: 'node',
    minify: isProduction
});

await Bun.build({
    entrypoints: ['./src/main.scss'],
    outdir: './dist',
    naming: '[name].css',
    minify: isProduction,
    loader: { '.scss': 'css' },
    plugins: [styleScss]
});

await copyFiles(
    [
        './src/assets/favicon.ico'
    ],
    './dist');
