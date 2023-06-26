import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListServiceUseCase } from "./ListServicesUseCase";

class ListServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type_services, date_start, date_end } = request.query;

    const listServiceUseCase = container.resolve(ListServiceUseCase);

    const listServices = await listServiceUseCase.execute({ type_services, date_start, date_end });

    return response.json(listServices);
  }
}

export { ListServicesController };