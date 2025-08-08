import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-panel',
  imports: [MatToolbarModule, JsonPipe],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss',
})
export class UserPanelComponent {
  @Input() user!: User;
}
