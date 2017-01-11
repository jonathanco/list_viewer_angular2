import { Storage } from './storage';
import { NgModule } from '@angular/core';
import { UpupPipe } from './upup.pipe';
import { SunshineDirective } from './sunshine.directive';
import { OnlyIfDirective } from './only-if.directive';

@NgModule({
  providers: [Storage],
  declarations: [UpupPipe, SunshineDirective, OnlyIfDirective],
  exports: [UpupPipe, SunshineDirective, OnlyIfDirective]
})

export class UtilsModule {

}
