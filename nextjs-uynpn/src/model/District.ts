import { Ward } from "./Ward";

export interface District {
    id: number;
    name: string;
    provinceId: number;
    wards: Ward[];
  }

  // add end line
