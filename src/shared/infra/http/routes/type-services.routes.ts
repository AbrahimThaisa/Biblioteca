import { Router } from "express";

import { CreateTypeServiceController } from "@modules/library-services/useCases/createTypeService/CreateTypeServiceController";
import { ListTypeServicesController } from "@modules/library-services/useCases/listTypeServices/ListTypeServicesController";
import { EditTypeServiceController } from "@modules/library-services/useCases/editTypeService/EditTypeServiceController";
import { DeleteTypeServiceController } from "@modules/library-services/useCases/deleteTypeService/DeleteTypeServiceController";
import { GetTypeServiceController } from "@modules/library-services/useCases/getTypeService/GetTypeServiceController";

const typeServicesRoutes = Router();

const createTypeServiceController = new CreateTypeServiceController();

const listTypeServiceController = new ListTypeServicesController();

const editTypeServiceController = new EditTypeServiceController();

const deleteTypeServiceController = new DeleteTypeServiceController();

const getTypeServiceController = new GetTypeServiceController();

typeServicesRoutes.post("/", createTypeServiceController.handle);
typeServicesRoutes.get("/", listTypeServiceController.handle);
typeServicesRoutes.put("/:id", editTypeServiceController.handle);
typeServicesRoutes.delete("/:id", deleteTypeServiceController.handle);
typeServicesRoutes.get("/:id", getTypeServiceController.handle);

export { typeServicesRoutes };