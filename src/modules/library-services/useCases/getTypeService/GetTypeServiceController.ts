import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetTypeServiceUseCase } from "./GetTypeServiceUseCase";




class GetTypeServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getTypeServiceUseCase = container.resolve(GetTypeServiceUseCase);

    const type_service = await getTypeServiceUseCase.execute(parseInt(id));

    return response.json(type_service);
  }
}

export { GetTypeServiceController };