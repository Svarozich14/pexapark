import { Injectable } from '@angular/core';
import { of } from "rxjs";
import * as mockedData from './wind-farm.constant';

@Injectable()
export class WindFarmService {
  constructor() {
  }

  retrieveWindFarmSelect(windFarmName: string) {
    const result = this.buildResult(this.getPlanedBudget(windFarmName));
    return of(result);
  }

  buildBudgetData(items, windFarmName) {
    let planedBudget = this.getPlanedBudget(windFarmName);
    return mockedData.months.map((month, index) => ({
        month,
        budget: planedBudget / 12,
        realized: items[index] ? items[index] : ''
      })
    );
  }

  private buildResult(planedProduction: number): { result: number[] } {
    const result = [];
    const month = (new Date()).getUTCMonth();
    for (let i = month; i > 0; i--) {
      result.push(planedProduction / 12 * 0.8 + planedProduction / 12 * 0.4 * Math.random());
    }
    return {result};
  }

  private getPlanedBudget(windFarmName: string) {
    // mocked data for Wind Farm
    let planedProduction: number;
    switch (windFarmName) {
      case 'windFarm1':
        return planedProduction = mockedData.windFarmData1;
      case 'windFarm2':
        return planedProduction = mockedData.windFarmData2;
      default:
        return planedProduction = 0;
    }
  }
}
