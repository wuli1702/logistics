import { observable, action } from 'mobx';

class ClickTimesStore {
  @observable times;
  @action increase = (cnt) => {
    this.times += cnt;
  }

  constructor() {
    this.times = 0;
  }
}

const clickTimes = new ClickTimesStore();
export default clickTimes;