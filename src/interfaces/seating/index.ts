import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface SeatingInterface {
  id?: string;
  status: string;
  restaurant_id?: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface SeatingGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  restaurant_id?: string;
}
