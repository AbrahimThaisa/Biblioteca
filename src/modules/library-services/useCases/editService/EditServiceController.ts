import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditServiceUseCase } from "./EditServiceUseCase";

class EditServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id_type_service, description, service_date } = request.body;

    const editServiceUseCase = container.resolve(EditServiceUseCase);

    await editServiceUseCase.execute({ id: parseInt(id), id_type_service, description, service_date });

    return response.status(200).send();
  }
}

export { EditServiceController };