import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTypeServiceUseCase } from "./DeleteTypeServiceUseCase";

class DeleteTypeServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTypeServiceUseCase = container.resolve(DeleteTypeServiceUseCase);

    await deleteTypeServiceUseCase.execute(parseInt(id));

    return response.status(204).send();
  }
}

export { DeleteTypeServiceController };