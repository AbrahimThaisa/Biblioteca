import { Router } from "express";

import { CreateServiceController } from "@modules/library-services/useCases/createService/CreateServiceController";
import { ListServicesController } from "@modules/library-services/useCases/listServices/ListServicesController";
import { DeleteServiceController } from "@modules/library-services/useCases/deleteService/DeleteServiceController";
import { EditServiceController } from "@modules/library-services/useCases/editService/EditServiceController";
import { GetServiceController } from "@modules/library-services/useCases/getService/GetServiceController";

const serviceRoutes = Router();

const createServiceController = new CreateServiceController();

const listServicesController = new ListServicesController();

const deleteServiceController = new DeleteServiceController();

const editServiceController = new EditServiceController();

const getServiceController = new GetServiceController();

serviceRoutes.post("/", createServiceController.handle);
serviceRoutes.get("/", listServicesController.handle);
serviceRoutes.delete("/:id", deleteServiceController.handle);
serviceRoutes.put("/:id", editServiceController.handle);
serviceRoutes.get("/:id", getServiceController.handle);

export { serviceRoutes };