import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDocumentComponent } from './afficher-document.component';

describe('AfficherDocumentComponent', () => {
  let component: AfficherDocumentComponent;
  let fixture: ComponentFixture<AfficherDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherDocumentComponent]
    });
    fixture = TestBed.createComponent(AfficherDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
