export class CornService {
    private apiUrl: string;

    constructor(baseUrl: string) {
      if (!baseUrl) {
        throw new Error("Api url is required");
      }
      this.apiUrl = baseUrl;
    }

    buyCorn = async () => {
      const response = await fetch(`${this.apiUrl}/buy-corn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });
    
      const data = await response.json();
    
      if (!response.ok) {
        throw new Error(data.message);
      }
    
      return data;
    };
}
