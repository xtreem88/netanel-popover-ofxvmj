import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { PopoverComponent } from './popover/popover.component';
import { InsidePopoverComponent } from './inside-popover/inside-popover.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    OverlayModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, PopoverComponent, InsidePopoverComponent],
  bootstrap: [AppComponent],
  entryComponents: [PopoverComponent, InsidePopoverComponent]
})
export class AppModule { }
