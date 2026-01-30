import express from 'express'
import { changeBookingStatus, checkAvailabilityOfCar, createBooking, getOwnerBooking, getUserBookings } from '../controllers/bookingController.js';
import { protect } from '../middleware/auth.js';

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityOfCar )
bookingRouter.post('/create', protect, createBooking)
bookingRouter.get('/user', protect, getUserBookings)
bookingRouter.get('owner', protect , getOwnerBooking)
bookingRouter.post('/change-status', protect , changeBookingStatus)

export default bookingRouter;