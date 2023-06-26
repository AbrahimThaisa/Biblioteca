import { Request, Response } from "express";

import { container } from "tsyringe";

import { EditTypeServiceUseCase } from "./EditTypeServiceUseCase";

class EditTypeServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const editTypeServiceUseCase = container.resolve(EditTypeServiceUseCase);

    await editTypeServiceUseCase.execute({ id: parseInt(id), name });

    return response.status(200).send();
  }
}

export { EditTypeServiceController };