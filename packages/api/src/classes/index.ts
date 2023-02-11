import { ClassesApiEmail } from "./email";
import { ClassesApiHash } from "./hash";

class ClassesApi {
  private apiemails: ClassesApiEmail;

  private apihash: ClassesApiHash;

  constructor() {
    this.apiemails = new ClassesApiEmail();
    this.apihash = new ClassesApiHash();
  }

  public get emails(): ClassesApiEmail {
    return this.apiemails;
  }

  public get hash(): ClassesApiHash {
    return this.apihash;
  }
}

export const classesapi = new ClassesApi();
