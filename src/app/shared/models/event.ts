import { User } from "./user";

export class Event {
  title: string;
  dkpReward: number;
  assistans: User[];
  tentative: User[];
  late: User[];
  abstain: User[];
}
