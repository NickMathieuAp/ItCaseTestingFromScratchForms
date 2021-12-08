import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { MappingTableBuilderComponent } from "./mappingTableBuilder/mappingTableBuilder.component";
import { ConfigurationBuilderComponent } from "./configurationBuilder/configurationBuilder.component";
import { FormConfigurationBuilderComponent } from "./formConfigurationbuilder/formConfigBuilder.component";  //This is the form Component with all the fields 
import { DatabaseSelectionComponent } from './database-selection/database-selection.component';

const routes: Routes = [
  // {path: "", redirectTo : "/select", pathMatch: 'full'},
  {path: '', redirectTo: 'select', pathMatch: 'full'},
  {path: "select", component: DatabaseSelectionComponent},
  {path: "test" , component: TestComponent},
  {path: "mappingTableBuilder" , component: MappingTableBuilderComponent},
  {path: "configurationBuilder" , component: ConfigurationBuilderComponent,}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
