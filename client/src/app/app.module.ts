import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
import { MatHint } from '@angular/material/form-field';
import { MatRadioButton } from '@angular/material/radio';
import { MatRadioGroup } from '@angular/material/radio';

import { UserListComponent } from './users/user-list.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './users/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { UserCardComponent } from './users/user-card.component';
import { UserProfileComponent } from './users/user-profile.component';
import { AddUserComponent } from './users/add-user.component';
import { ProductProfileComponent } from './products//product-profile.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductCardComponent } from './products/product-card.component';

const MATERIAL_MODULES: any[] = [
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatInputModule,
  MatExpansionModule,
  MatListModule,
  MatTooltipModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatDividerModule,
  MatRadioModule,
  MatSnackBarModule,
  MatButton,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
  MatCardSubtitle,
  MatCardHeader,
  MatIcon,
  MatLabel,
  MatRadioButton,
  MatRadioGroup,
  MatToolbar,
  RouterOutlet,
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
  MatError,
  MatNavList,
  MatOption,
  MatSelect,
  MatFormField,
  MatHint
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserCardComponent,
    UserProfileComponent,
    AddUserComponent,
    ProductProfileComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MATERIAL_MODULES,
    LayoutModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
