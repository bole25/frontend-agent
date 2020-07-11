import {VehicleSOAP} from './VehicleSOAP';

export class RequestSOAP {
  id: number;
  ownerUsername: string;
  status: string;
  vehicles: Set<VehicleSOAP> = new Set<VehicleSOAP>();
}
