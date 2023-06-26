import { Request, Response } from "express";

import { container } from "tsyringe";

import { CreateTypeServiceUseCase } from "./CreateTypeServiceUseCase";

class CreateTypeServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createServiceUseCase = container.resolve(CreateTypeServiceUseCase);

    await createServiceUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateTypeServiceController }