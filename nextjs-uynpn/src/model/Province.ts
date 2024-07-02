import { District } from "./District";

export interface Province {
    id: number;
    name: string;
    districts: District[];
  }
