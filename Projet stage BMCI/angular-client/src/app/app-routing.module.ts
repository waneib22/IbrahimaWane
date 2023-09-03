import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryTableComponent } from './component/categories/category-table/category-table.component';
import { DocumentTableComponent } from './component/documents/document-table/document-table.component';
import { LoginComponent } from './component/login/login.component';
import { AdminTemplateComponent } from './component/admin-template/admin-template.component';
import {AuthenticationGuard} from "./security/guards/authentication.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminTemplateComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: 'modules/:moduleId/categories', component: CategoryTableComponent },
      { path: 'documents/:categoryId', component: DocumentTableComponent }
    ]
  },
  { path: "*", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
