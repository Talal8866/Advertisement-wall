import { Component } from '@angular/core';
import { Toaster } from '../../../core/services/toaster';

export interface Ad {
  id: number;
  title: string;
  status: AdStatus;
  email: string;
  phoneNumber: string;
  website: string;
  img: String
  isVip: Boolean
  type: string
}

export interface AdsCount {
  pending: number;
  accepted: number;
  rejected: number;
}

export type AdStatus = 'pending' | 'accepted' | 'rejected';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css',
})

export class AdminPanel {
  constructor(private toaster: Toaster) { }

  activeTabType: AdStatus = 'pending';

  allAds: Ad[] = [];
  ads: Ad[] = [];

  adsCount: AdsCount = {
    pending: 0,
    rejected: 0,
    accepted: 0
  }

  ngOnInit(): void {
    this.loadAllAds();
  }

  ngOnDestroy(): void {
  }

  loadAllAds() {
    this.allAds = [{ id: 1, title: 'إعلان 1', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 2, title: 'إعلان 2', status: 'rejected', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 3, title: 'إعلان 3', status: 'accepted', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 4, title: 'إعلان 4', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 5, title: 'إعلان 5', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 6, title: 'إعلان 6', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 7, title: 'إعلان 7', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 8, title: 'إعلان 8', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 9, title: 'إعلان 9', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 10, title: 'إعلان 10', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 11, title: 'إعلان 11', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 12, title: 'إعلان 12', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 13, title: 'إعلان 13', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 14, title: 'إعلان 14', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 15, title: 'إعلان 15', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },
    { id: 16, title: 'إعلان 16', status: 'pending', email: 'Talal@gmail.com', phoneNumber: "+963947045918", website: "talal.com", img: "", isVip: true, type: "" },];

    this.updateFilteredAds();
    this.countingStatus();
  }

  updateFilteredAds() {
    this.ads = this.allAds.filter(ad => ad.status === this.activeTabType);
  }

  countingStatus() {
    this.adsCount.pending = this.allAds.filter(ad => ad.status === 'pending').length;
    this.adsCount.rejected = this.allAds.filter(ad => ad.status === 'rejected').length;
    this.adsCount.accepted = this.allAds.filter(ad => ad.status === 'accepted').length;
  }

  setTab(tab: AdStatus): void {
    this.activeTabType = tab;
    this.updateFilteredAds();
  }

  deleteAd(id: number) {
    this.allAds = this.allAds.filter(ad => ad.id !== id);
    if (id) {
      this.updateFilteredAds();
      this.countingStatus();
      this.toaster.warning("تم حذف الإعلان")
    }
  }

  approveAd(id: number) {
    const ad = this.allAds.find(a => a.id === id);
    if (ad) {
      ad.status = "accepted"
      this.updateFilteredAds();
      this.countingStatus();
      this.toaster.success("تم قبول الإعلان")
    }
  }

  rejectAd(id: number) {
    const ad = this.allAds.find(a => a.id === id);
    if (ad) {
      ad.status = 'rejected';
      this.updateFilteredAds();
      this.countingStatus();
      this.toaster.info("تم رفض الإعلان")
    }
  }
}