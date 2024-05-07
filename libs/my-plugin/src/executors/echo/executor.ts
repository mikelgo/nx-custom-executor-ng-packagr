import { EchoExecutorSchema } from './schema';
import { ExecutorContext } from 'nx/src/config/misc-interfaces';
import { ngPackagrLiteExecutor, packageExecutor } from '@nx/angular/executors';
import * as path from 'node:path';

export default async function runExecutor(options: EchoExecutorSchema, context: ExecutorContext) {

  console.log('Executor ran for Echo', options);
  const lib = 'lib/components'

  const relativepath = path.relative('./', path.join(lib, 'index.ts'))

  const project = context.workspace.projects[context.projectName];
  // const ngPackagr = ngPackagrLiteExecutor({
  //    project: options.ngPackageJson,
  //   tsConfig: options.tsConfig,
  //   watch: false
  // }, context)
  //
  // await ngPackagr.next();

  for await (const result of packageExecutor(options, context)) {
    if(!result.success) {
      return result;
    }
  }

  return {
    success: true,
  };
}
