export const config: IConfig = {
    globalRewardCommands: [''],
    typeRewardCommands: [''],
    datapackFormat: 18,
    resourcepackFormat: 18,
    techName: 'tropical_fish_compendium',
    i18nName: 'tropical fish compendium',
    jsonMinified: true,

};

export interface IConfig {
    globalRewardCommands: string[];
    typeRewardCommands: string[];
    datapackFormat: number;
    resourcepackFormat: number;
    techName: string;
    i18nName: string;
    jsonMinified: boolean;
}
