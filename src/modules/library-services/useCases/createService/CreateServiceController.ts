import { Request, Response } from "express";

import { container } from "tsyringe";

import { CreateServiceUseCase } from "./CreateServiceUseCase";

class CreateServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_type_service, description, service_date } = request.body;

    const createLibraryServiceUseCase = container.resolve(CreateServiceUseCase);

    await createLibraryServiceUseCase.execute({ id_type_service, description, service_date });

    return response.status(201).send();
  }
}

export { CreateServiceController }