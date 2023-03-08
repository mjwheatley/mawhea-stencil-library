import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StencilLibraryAngularComponent } from './stencil-library-angular.component';

describe('StencilLibraryAngularComponent', () => {
  let component: StencilLibraryAngularComponent;
  let fixture: ComponentFixture<StencilLibraryAngularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StencilLibraryAngularComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StencilLibraryAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
