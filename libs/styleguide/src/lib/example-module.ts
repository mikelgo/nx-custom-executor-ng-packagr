import { NgModule } from '@angular/core';
import { BtnModule } from '@components/components/btn';
import { MaterialModule } from './material-module';
import { StyleguideComponent } from './styleguide/styleguide.component';
export { StyleguideComponent } from './styleguide/styleguide.component';

const EXAMPLES = [StyleguideComponent];

@NgModule({
  imports: [MaterialModule, ...EXAMPLES],
  exports: [MaterialModule, ...EXAMPLES],
})
export class ExampleModule {}
