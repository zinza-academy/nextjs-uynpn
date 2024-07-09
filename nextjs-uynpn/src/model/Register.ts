export interface Register {
  id: number;
  email: string;
  password: string;
  cmnd: string;
  name: string;
  dob: string;
  gender: string;
  province?: number;
  district?: number;
  ward?: number;
}
