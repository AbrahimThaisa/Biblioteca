import { Router } from 'express';

import { serviceRoutes } from './services.routes';
import { typeServicesRoutes } from './type-services.routes';

const router = Router();

router.use("/service", serviceRoutes);
router.use("/type-service", typeServicesRoutes);

export { router }