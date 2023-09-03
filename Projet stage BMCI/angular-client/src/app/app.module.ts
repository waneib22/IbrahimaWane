import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { LogoutComponent } from './component/logout/logout.component';
import { ModuleListComponent } from './component/modules/module-list/module-list.component';
import { CategoryTableComponent } from './component/categories/category-table/category-table.component';
import { ModuleDetailsComponent } from './component/modules/module-details/module-details.component';
import { DocumentTableComponent } from './component/documents/document-table/document-table.component';
import { CategoryListComponent } from './component/categories/category-list/category-list.component';
import { CategoryUpdateDialogComponent } from './component/dialogs/category-update-dialog/category-update-dialog.component';
import { CategoryDeletionDialogComponent } from './component/dialogs/category-deletion-dialog/category-deletion-dialog.component';
import { CategoryCreationDialogComponent } from './component/dialogs/category-creation-dialog/category-creation-dialog.component';
import { DocumentEditingDialogComponent } from './component/dialogs/document-editing-dialog/document-editing-dialog.component';
import { DocumentDeletionDialogComponent } from './component/dialogs/document-deletion-dialog/document-deletion-dialog.component';
import { LoginComponent } from './component/login/login.component';
import { AdminTemplateComponent } from './component/admin-template/admin-template.component';
import {AppHttpInterceptor} from "./security/interceptors/app-http.interceptor";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ModuleListComponent,
    CategoryTableComponent,
    ModuleDetailsComponent,
    DocumentTableComponent,
    CategoryListComponent,
    CategoryUpdateDialogComponent,
    CategoryDeletionDialogComponent,
    CategoryCreationDialogComponent,
    DocumentEditingDialogComponent,
    DocumentDeletionDialogComponent ,
    AdminTemplateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSortModule,
    MatTreeModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
