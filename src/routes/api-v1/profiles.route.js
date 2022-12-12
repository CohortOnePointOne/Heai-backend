import express from 'express';
import ProfileController from '../../controllers/profiles';
// import validate from '../../middleware/validate';
const router = express();

router.get('/', ProfileController.getAllprofiles);

router.post('/', ProfileController.createAProfile);
router.get('/:id', ProfileController.getAProfile);

router.put('/:id', ProfileController.updateAProfile);

export default router;
