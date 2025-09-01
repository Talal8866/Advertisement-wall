import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Toaster } from '../../../core/services/toaster';

@Component({
  selector: 'app-submit-ad',
  templateUrl: './submit-ad.html',
  styleUrls: ['./submit-ad.css'],
  standalone: false,
})
export class SubmitAd implements OnInit {
  constructor(private toast: Toaster) { }

  adsForm!: FormGroup;
  logoFile: File | null = null;
  logoFileName: string | null = null;
  imageUrl: string | null = null;

  ngOnInit(): void {
    this.adsForm = new FormGroup({
      category: new FormControl(null, Validators.required),
      adType: new FormControl('regular'),
      businessName: new FormControl(null, Validators.required),
      businessDescription: new FormControl(null),
      phoneNumber: new FormControl(null, Validators.pattern(/^\+?[1-9]\d{1,14}$/)),
      email: new FormControl(null, Validators.email),
      website: new FormControl(null),
      checkTerms: new FormControl(false, Validators.requiredTrue)
    });
  }

  submitAd(): void {
    if (this.adsForm.valid && this.logoFile) {
      const formData = new FormData();
      formData.append('category', this.adsForm.value.category);
      formData.append('adType', this.adsForm.value.adType || '');
      formData.append('businessName', this.adsForm.value.businessName);
      formData.append('businessDescription', this.adsForm.value.businessDescription || '');
      formData.append('phoneNumber', this.adsForm.value.phoneNumber || '');
      formData.append('email', this.adsForm.value.email || '');
      formData.append('website', this.adsForm.value.website || '');
      formData.append('logo', this.logoFile);

      console.log('Submitting model:', formData);

      // this.http.post('/api/submit-ad', formData).subscribe({
      //   next: () => {

      this.logoFile = null;  // تنظيف الصورة بعد الإرسال
      this.logoFileName = null;
      this.imageUrl = null;
      this.adsForm.reset({ adType: 'regular' });

      //   },
      //   error: (err) => {
      //     console.error('فشل الإرسال', err);
      //     alert('حدث خطأ أثناء إرسال الإعلان');
      //   }
      // })

      this.toast.success('تم إرسال الإعلان بنجاح');

    } else {
      this.adsForm.markAllAsTouched();
      this.toast.error('يرجى تصحيح الحقول المطلوبة قبل المتابعة');
    }
  }

  onLogoSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.logoFile = file;
      this.logoFileName = file.name;

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

