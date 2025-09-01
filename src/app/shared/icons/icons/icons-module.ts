import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Home,
  Search,
  Bell,
  User,
  Plus,
  Edit3,
  Trash2,
  ArrowLeft,
  ArrowRight,
  Settings,
  PlusCircle,
  Check,
  X,
  Palette,
  Star,
  Crown,
  Mail,
  Globe,
  Phone,
  Sparkles
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Home,
      Search,
      Bell,
      User,
      Plus,
      Edit3,
      Trash2,
      ArrowLeft,
      ArrowRight,
      PlusCircle,
      Settings,
      Check,
      X,
      Palette,
      Star,
      Crown,
      Mail,
      Globe,
      Phone,
      Sparkles
    })
  ],
  exports: [LucideAngularModule]
})
export class IconsModule {}
