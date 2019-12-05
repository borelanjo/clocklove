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

  public async save(memorableTime: MemorableTime): Promise<MemorableTime> {
    return this.list().then((memorableTimes: MemorableTime[]) => {
      if (!memorableTimes) {
        memorableTimes = this.initList();
      }
      memorableTimes.push(memorableTime);
      this.storage.set(this.baseName, memorableTimes);
      return memorableTime;
    });
  }

  public saveAll(memorableTimes: MemorableTime[]): Promise<MemorableTime[]> {
    return this.storage.set(this.baseName, memorableTimes).then(() => {

      return memorableTimes;
    });
  }

  public delete(memorableTimes: MemorableTime[], toDelete: MemorableTime): Promise<MemorableTime[]> {

    memorableTimes = memorableTimes.filter(item => item !== toDelete);
    return this.saveAll(memorableTimes);

  }

  public list(): Promise<MemorableTime[]> {

    return this.storage.get(this.baseName);
  }

  private initList(): MemorableTime[] {
    const memorableTimes: MemorableTime[] = [];
    return memorableTimes;
  }
}
