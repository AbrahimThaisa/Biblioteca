import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteServiceUseCase } from "./DeleteServiceUseCase";

class DeleteServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteServiceUseCase = container.resolve(DeleteServiceUseCase);

    await deleteServiceUseCase.execute(parseInt(id));

    return response.status(204).send();
  }
}

export { DeleteServiceController };