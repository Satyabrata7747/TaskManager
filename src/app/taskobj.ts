export class Taskobj {
  title: string;
  description: string;
  date: string;
  status: string;
  timestamp: number;
  constructor(
    title: string,
    description: string,
    date: string,
    status: string,
    timestamp: number
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
    this.timestamp = timestamp;
  }
}
