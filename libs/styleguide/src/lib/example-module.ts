import { NgModule } from '@angular/core';
import { BtnModule } from '@components/components/btn';
import { MaterialModule } from './material-module';
import { StyleguideComponent } from './styleguide/styleguide.component';

@NgModule({
  imports: [MaterialModule, StyleguideComponent],
  exports: [MaterialModule, StyleguideComponent],
})
export class ExampleModule {}
