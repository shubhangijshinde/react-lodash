class SingletonService {
    static instance;
  
    constructor() {
      if (SingletonService.instance) {
        return SingletonService.instance;
      }
  
      this.data = {
        name: "Singleton Service",
        timestamp: new Date(),
      };
      SingletonService.instance = this;
    }
  }
  
  export const singletonService = new SingletonService();
  