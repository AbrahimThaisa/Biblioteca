import { container } from "tsyringe";

import { ITypeServiceRepository } from "@modules/library-services/repositories/ITypeServiceRepository";
import { TypeServiceRepository } from "@modules/library-services/repositories/implementations/TypeServiceRepository";
import { IServiceRepository } from "@modules/library-services/repositories/IServiceRepository";
import { ServiceRepository } from "@modules/library-services/repositories/implementations/ServiceRepository";

container.registerSingleton<ITypeServiceRepository>(
  "TypeServiceRepository",
  TypeServiceRepository
);

container.registerSingleton<IServiceRepository>(
  "ServiceRepository",
  ServiceRepository
);