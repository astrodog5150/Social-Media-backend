const router = require('express').Router();
const thoughtController = require('../../controllers/thought-controller');

router.get('/', thoughtController.getAllThoughts);
router.get('/:thoughtId', thoughtController.getThoughtById);
router.post('/', thoughtController.createThought);
router.put('/:thoughtId', thoughtController.updateThought);
router.delete('/:thoughtId', thoughtController.deleteThought);
router.post('/:thoughtId/reactions', thoughtController.addReaction);
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;