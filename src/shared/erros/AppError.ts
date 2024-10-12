class AppError{
  public readonly message: string;
  public readonly statusCode: number;


  //status code padrão é 400
  constructor(message: string, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode;
  }
}


export default AppError;
