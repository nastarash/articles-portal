import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAticleComponent } from './edit-aticle.component';

describe('EditAticleComponent', () => {
  let component: EditAticleComponent;
  let fixture: ComponentFixture<EditAticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
