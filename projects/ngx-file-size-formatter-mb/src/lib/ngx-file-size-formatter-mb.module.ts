import { NgModule } from '@angular/core';
import { NgxFileSizeFormatterMbComponent } from './ngx-file-size-formatter-mb.component';
import { FileSizeFormatterPipe } from './pipe/file-size-formatter.pipe';

const exports = [
  NgxFileSizeFormatterMbComponent,
  FileSizeFormatterPipe
]

@NgModule({
  declarations: [exports],
  imports: [
  ],
  exports: [exports]
})
export class NgxFileSizeFormatterMbModule { }
