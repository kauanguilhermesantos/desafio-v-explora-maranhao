import Controller from './Controller.js';
import UserService from '../services/UserService.js'


const userServices = new UserService();

export default class UserController extends Controller {
  constructor() {
    super(userServices);
  }
}

