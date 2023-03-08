import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StencilLibraryAngularComponent } from './stencil-library-angular.component';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  declarations: [
    StencilLibraryAngularComponent,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StencilLibraryAngularComponent,
    ...DIRECTIVES
  ]
})
export class StencilLibraryAngularModule {
}
