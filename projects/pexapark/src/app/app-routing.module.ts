import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wind-farm/table',
    pathMatch: 'full'
  },
  {
    path: 'wind-farm',
    loadChildren: () =>
      import('./features/wind-farm/wind-farm.module').then(m => m.WindFarmModule)
  },
  {
    path: '**',
    redirectTo: 'wind-farm'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
