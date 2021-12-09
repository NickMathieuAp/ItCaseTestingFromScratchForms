import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { MappingTableBuilderComponent } from "./mappingTableBuilder/mappingTableBuilder.component";
import { ConfigurationBuilderComponent } from "./configurationBuilder/configurationBuilder.component";
import { FileExtentionComponent } from "./fileExtention/fileExtention.component";
import { DatabaseSelectionComponent } from './database-selection/database-selection.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  // {path: "", redirectTo : "/select", pathMatch: 'full'},
  {path: '', redirectTo: 'select', pathMatch: 'full'},
  {path: "select", component: DatabaseSelectionComponent},
  {path: "test" , component: TestComponent},
  {path: "mappingTableBuilder" , component: MappingTableBuilderComponent},
  {path: "configurationBuilder" , component: ConfigurationBuilderComponent},
  {path: "fileextention" , component: FileExtentionComponent},
  

];

@NgModule({


  imports: [RouterModule.forRoot(routes), MatFormFieldModule],
  exports: [RouterModule, MatFormFieldModule,]
})
export class AppRoutingModule { }
