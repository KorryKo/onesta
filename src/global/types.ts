export interface MenuItems {
  title: string;
  path: string;
}

//fruits interfaces
export interface Commodity {
  id: string;
  name: string;
  varieties: Variety[];
}

export interface Variety {
  id: string;
  name: string;
}

export interface CommodityData {
  commodities: Commodity[];
  count: number;
}

// clients interfaces
export interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

export interface ClientsData {
  clients: Client[];
  count: number;
}

//growers iterfaces
export interface Grower {
  id: string;
  name: string;
  lastName: string;
  email: string;
  farms: Farms[];
}

interface Farms {
  id: string;
  name: string;
  address: string;
}

export interface GrowersData {
  growers: Grower[];
  count: number;
}

//harvests interfaces
export interface Harvest {
  id: string;
  grower: Grower;
  farm: Farm;
  client: Client;
  commodity: Comodity;
  variety: Variety;
  createdAt: string;
}

export interface Farm {
  id: string;
  name: string;
  address: string;
}

export interface Comodity{
  id: string;
  name: string;
}

export interface HarvestsData {
  harvests: Harvest[];
  count: number;
}

//add harvests
export type DataObject = {
  id: string;
  name: string;
};
