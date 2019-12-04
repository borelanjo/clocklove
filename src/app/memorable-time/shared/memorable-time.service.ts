import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MemorableTime } from './memorable-time.model';

@Injectable({
  providedIn: 'root'
})
export class MemorableTimeService {

  private baseName = 'memorableTimes';

  constructor(private storage: Storage) {

  }

  public save(memorableTime: MemorableTime): MemorableTime {
    this.list().then((memorableTimes: MemorableTime[]) => {
      if (!memorableTimes) {
        memorableTimes = this.initList();
      }
      memorableTimes.push(memorableTime);
      this.storage.set(this.baseName, memorableTimes);
    });
    return memorableTime;
  }

  public saveAll(memorableTimes: MemorableTime[]): MemorableTime[] {
    this.storage.set(this.baseName, memorableTimes);
    return memorableTimes;
  }

  public delete(memorableTime: MemorableTime) {
    this.list().then(itens => {
      itens = itens.filter(item => item !== memorableTime);
      this.saveAll(itens);
    });

  }

  public list(): Promise<MemorableTime[]> {

    return this.storage.get(this.baseName);
  }

  private initList(): MemorableTime[] {
    const memorableTimes: MemorableTime[] = [];
    return memorableTimes;
  }
}
