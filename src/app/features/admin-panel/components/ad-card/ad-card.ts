import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ad, AdStatus } from '../../admin-panel component/admin-panel';

@Component({
  selector: 'app-ad-card',
  standalone: false,
  templateUrl: './ad-card.html',
  styleUrl: './ad-card.css'
})
export class AdCard {
  
  @Input() ad!: Ad;
  @Input() status!: AdStatus;

  @Output() delete = new EventEmitter<number>();
  @Output() approve = new EventEmitter<number>();
  @Output() reject = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.ad.id);
  }

  onApprove() {
    this.approve.emit(this.ad.id);
  }

  onReject() {
    this.reject.emit(this.ad.id);
  }
}
