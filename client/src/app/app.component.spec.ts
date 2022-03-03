import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppModule } from './app.module';
import { MatButton } from '@angular/material/button';
import { MatCardContent } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatCardActions } from '@angular/material/card';
import { MatError } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatHint } from '@angular/material/form-field';
import { MatRadioButton } from '@angular/material/radio';
import { MatRadioGroup } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatButton,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatCardModule,
        MatHint,
        MatRadioButton,
        MatRadioGroup,
        MatFormField,
        MatLabel,
        MatSelect,
        MatSidenav,
        MatSidenavContent,
        MatSidenavContainer,
        MatOption,
        MatError,
        MatIcon,
        MatNavList,
        MatCardActions,
        MatToolbar,
        RouterOutlet,
        AppModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CSCI 3601 Iteration Template'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CSCI 3601 Iteration Template');
  });
});
