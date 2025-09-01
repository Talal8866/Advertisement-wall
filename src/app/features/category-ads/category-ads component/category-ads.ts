import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ad } from '../../admin-panel/admin-panel component/admin-panel';

@Component({
  selector: 'app-category-ads',
  standalone: false,
  templateUrl: './category-ads.html',
  styleUrl: './category-ads.css'
})
export class CategoryAds {
  constructor(private route: ActivatedRoute) { }

  slug!: string;
  vipAds: Ad[] = [
    { id: 1, title: 'إعلان 1', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 2, title: 'إعلان 2', status: 'rejected', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 3, title: 'إعلان 3', status: 'accepted', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 4, title: 'إعلان 4', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 5, title: 'إعلان 5', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 6, title: 'إعلان 6', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
  ]

  regularAds: Ad[] = [
    { id: 1, title: 'إعلان 1', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: false, type: "" },
    { id: 2, title: 'إعلان 2', status: 'rejected', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: false, type: "" },
    { id: 3, title: 'إعلان 3', status: 'accepted', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: false, type: "" },
    { id: 4, title: 'إعلان 4', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: false, type: "" },
    { id: 5, title: 'إعلان 5', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: false, type: "" },
    { id: 6, title: 'إعلان 6', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: false, type: "" },
  ]

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')!;
    // Call service: this.categoryAdsService.loadAdsByCategory(this.slug)
  }

  trackById(index: number, ad: any) {
    return ad.id; // لازم يكون لكل إعلان id فريد
  }
}
