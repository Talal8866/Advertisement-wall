import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class Toaster {

  constructor(private toastr: ToastrService) { }

  success(message: string = 'تم بنجاح', title = '') {
    this.toastr.success(message, title, this.commonConfig());
  }

  error(message: string = 'حدث خطأ ما', title = '') {
    this.toastr.error(message, title, this.commonConfig());
  }

  warning(message: string, title = '') {
    this.toastr.warning(message, title, this.commonConfig());
  }

  info(message: string, title = '') {
    this.toastr.info(message, title, this.commonConfig());
  }

  custom(message: string, title: string = '', config: Partial<IndividualConfig> = {}) {
    this.toastr.show(message, title, { ...this.commonConfig(), ...config });
  }

  private commonConfig(): Partial<IndividualConfig> {
    return {
      positionClass: 'toast-top-right',
        timeOut: 4000,                         
        closeButton: true,                 
        progressBar: true,                  
        newestOnTop: true,                      
    };
  }

}
