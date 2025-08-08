import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelComponent } from './user-panel.component';
import { User, UserRole } from '../../models/user.model';

describe('UserPanelComponent', () => {
  let component: UserPanelComponent;
  let fixture: ComponentFixture<UserPanelComponent>;

  const mockUser: User = {
    id: 1,
    username: 'testuser',
    role: 'User' as UserRole
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPanelComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
