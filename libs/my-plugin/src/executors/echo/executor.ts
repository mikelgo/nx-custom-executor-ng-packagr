import { EchoExecutorSchema } from './schema';
import { ExecutorContext } from 'nx/src/config/misc-interfaces';
import { ngPackagrLiteExecutor, packageExecutor } from '@nx/angular/executors';

export default async function runExecutor(options: EchoExecutorSchema, context: ExecutorContext) {

  console.log('Executor ran for Echo', options);

  const project = context.workspace.projects[context.projectName];
  const ngPackagr = ngPackagrLiteExecutor({
     project: options.ngPackageJson,
    tsConfig: options.tsConfig,
    watch: false
  }, context)

  await ngPackagr.next();

  return {
    success: true,
  };
}
