import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({  // toaster properties
      closeButton: true,
      progressBar: true,
      newestOnTop: true,
      preventDuplicates: true,
    })
  ],
  providers: [
    // provideBrowserGlobalErrorListeners(),
    // provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
