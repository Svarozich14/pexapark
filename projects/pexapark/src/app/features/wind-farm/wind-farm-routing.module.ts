import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindFarmComponent } from "./wind-farm/wind-farm.component";
import { WindFarmTableComponent } from "./wind-farm-table/wind-farm-table.component";
import { WindFarmChartComponent } from "./wind-farm-chart/wind-farm-chart.component";

const routes: Routes = [
  {
    path: '',
    component: WindFarmComponent,
    children: [
      {
        path: '',
        redirectTo: 'wind-farm-table',
        pathMatch: 'full'
      },
      {
        path: 'table',
        component: WindFarmTableComponent,
        data: {
          title: 'Table'
        }
      },
      {
        path: 'chart',
        component: WindFarmChartComponent,
        data: {
          title: 'Chart'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindFarmsRoutingModule {
}
