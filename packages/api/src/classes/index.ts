import { ClassesApiEmail } from "./email";
import { ClassesApiHash } from "./hash";
import { ClassesApiHandler } from "./_handler";

class ClassesApi {
  private apihandler: ClassesApiHandler;

  private apiemails: ClassesApiEmail;

  private apihash: ClassesApiHash;

  constructor() {
    this.apihandler = new ClassesApiHandler();
    this.apiemails = new ClassesApiEmail();
    this.apihash = new ClassesApiHash();
  }

  public get handler(): ClassesApiHandler {
    return this.apihandler;
  }

  public get emails(): ClassesApiEmail {
    return this.apiemails;
  }

  public get hash(): ClassesApiHash {
    return this.apihash;
  }
}

export const classesapi = new ClassesApi();
