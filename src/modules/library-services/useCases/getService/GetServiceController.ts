import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetServiceUseCase } from "./GetServiceUseCase";

class GetServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getServiceUseCase = container.resolve(GetServiceUseCase);

    const service = await getServiceUseCase.execute(parseInt(id));

    return response.json(service);
  }
}

export { GetServiceController };