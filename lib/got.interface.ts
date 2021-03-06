import { ExtendOptions } from 'got';
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

import { FunctionLike } from './utils';

export type GotModuleOptions = ExtendOptions;

export interface GotModuleOptionsFactory {
    createGotOptions(): GotModuleOptions | Promise<GotModuleOptions>;
}

// prettier-ignore
export interface GotModuleAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    useFactory?: FunctionLike<GotModuleOptions | Promise<GotModuleOptions>>;
    useClass?: Type<GotModuleOptionsFactory>;
    useExisting?: Type<GotModuleOptionsFactory>;
    inject?: any[];
}
