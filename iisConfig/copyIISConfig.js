import fsExtra from 'fs-extra';

const { existsSync, unlinkSync, copySync } = fsExtra;

const webConfigPath = './dist/web.config';

if (existsSync(webConfigPath)) {
    unlinkSync(webConfigPath);
}

copySync('./iisConfig/web.config', webConfigPath);