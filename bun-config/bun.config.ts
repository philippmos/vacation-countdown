import { basename } from 'path';

export const mode = process.env.NODE_ENV || 'development';
export const isProduction = mode === 'production';

const getFileName = (filePath: string): string => basename(filePath)

export const copyFiles = async (files: string[], outputDir: string) => {
    files.forEach(async (file) => {
        try {
            const fileContent = Bun.file(file);
            await Bun.write(`${outputDir}/${getFileName(file)}`, fileContent);
        } catch {
            console.error(`Error copying file ${file}`);
        }
    });
}