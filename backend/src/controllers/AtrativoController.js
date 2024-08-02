import Controller from './controller.js';
import AtrativoServices from '../services/AtrativoServices.js'


const atrativoServices = new AtrativoServices();

export default class AtrativoController extends Controller {
  constructor() {
    super(atrativoServices);
  }
}

