import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ad, AdStatus } from '../../admin-panel component/admin-panel';

@Component({
  selector: 'app-ads-list',
  standalone: false,
  templateUrl: './ads-list.html',
  styleUrl: './ads-list.css'
})
export class AdsList {

  @Input() status!: AdStatus;
  @Input() ads: Ad[] = [];

  @Output() delete = new EventEmitter<number>();
  @Output() approve = new EventEmitter<number>();
  @Output() reject = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id); //  returns to AdminPanel
  }

  onApprove(id: number) {
    this.approve.emit(id); // returns to AdminPanel
  }

  onReject(id: number) {
    this.reject.emit(id); // returns to AdminPanel
  }

}
