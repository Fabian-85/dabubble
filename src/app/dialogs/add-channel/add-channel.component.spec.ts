import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChannelComponent } from './add-channel.component';

describe('AddChannelComponent', () => {
  let component: AddChannelComponent;
  let fixture: ComponentFixture<AddChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
