import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTypeServicesUseCase } from "./ListTypeServicesUseCase";



class ListTypeServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTypeService = container.resolve(ListTypeServicesUseCase);

    const type_services = await listTypeService.execute();

    return response.json(type_services);
  }
}

export { ListTypeServicesController }