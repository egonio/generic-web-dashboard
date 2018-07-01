
export class Report {
  public id: string;
  public apartment: string;
  public description: string;
  public email: string;
  public phoneNumber: string;
  public status: string;
  public submitterName: string;
  public title: string;
  public createdAt: string;


  constructor(
      id: string, apartment: string, description: string, email: string,  phoneNumber: string,
        status: string, submitterName: string, title: string, createdAt: string ) {
    this.id = id;
    this.title = title;
    this.submitterName = submitterName;
    this.apartment = apartment;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
  }
}
