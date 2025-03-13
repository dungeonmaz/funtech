import { makeAutoObservable } from "mobx";

export type TopElement = {
  bid: number;
  name: string;
  time: number;
  interval?: number;
};

class TopStore {
  data: TopElement[] = [];

  constructor() {
    this.data = [
      {
        bid: Math.random() * 10,
        name: "Sun-Glass",
        time: Math.floor(Math.random() * 20000 + 5000),
      },
      {
        bid: Math.random() * 10,
        name: "NuEvey",
        time: Math.floor(Math.random() * 20000 + 5000),
      },
      {
        bid: Math.random() * 10,
        name: "Sun-Glass",
        time: Math.floor(Math.random() * 20000 + 5000),
      },
      {
        bid: Math.random() * 10,
        name: "NuEvey",
        time: Math.floor(Math.random() * 20000 + 5000),
      },
      {
        bid: Math.random() * 10,
        name: "Sun-Glass",
        time: Math.floor(Math.random() * 20000 + 5000),
      },
      {
        bid: Math.random() * 10,
        name: "NuEvey",
        time: Math.floor(Math.random() * 20000 + 5000),
      },
      {
        bid: Math.random() * 10,
        name: "Sun-Glass",
        time: Math.floor(Math.random() * 20000 + 5000),
      },
    ];

    makeAutoObservable(this);
  }

  setData = (newData: TopStore["data"]) => {
    this.data = newData;
  };
}

export const topStore = new TopStore();
