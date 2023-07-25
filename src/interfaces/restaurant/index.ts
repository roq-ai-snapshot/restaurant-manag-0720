import { MenuInterface } from 'interfaces/menu';
import { SeatingInterface } from 'interfaces/seating';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  menu?: MenuInterface[];
  seating?: SeatingInterface[];
  user?: UserInterface;
  _count?: {
    menu?: number;
    seating?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
