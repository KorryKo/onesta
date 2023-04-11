import { useEffect, useState } from "react";
import {
  Commodity,
  DataObject,
  Grower,
  Client,
  Farm,
  Variety,
} from "@/global/types";

export const fetchHarvestFormData = async () => {
  const fruitsData = await fetch(
    "https://testapi.onesta.farm/v1/commodities"
  ).then((res) => res.json());
  const growersData = await fetch(
    "https://testapi.onesta.farm/v1/growers"
  ).then((res) => res.json());
  const clientsData = await fetch(
    "https://testapi.onesta.farm/v1/clients"
  ).then((res) => res.json());

  return {
    fruits: fruitsData.commodities,
    growers: growersData.growers,
    clients: clientsData.clients,
  };
};

const AddHarvestForm = () => {
  const [growerId, setGrowerId] = useState<string>("");
  const [farmId, setFarmId] = useState<string>("");
  const [clientId, setClientId] = useState<string>("");
  const [commodityId, setCommodityId] = useState<string>("");
  const [varietyId, setVarietyId] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const [fruitData, setFruitData] = useState<Commodity[]>([]);
  const [growerData, setGrowerData] = useState<Grower[]>([]);
  const [clientData, setClientData] = useState<Client[]>([]);
  const [availableFarms, setAvailableFarms] = useState<Farm[]>([]);
  const [availableFruitVarieties, setAvailableFruitVarieties] = useState<
    Variety[]
  >([]);

  const init = async () => {
    const { fruits, growers, clients } = await fetchHarvestFormData();
    setFruitData(fruits);
    setGrowerData(growers);
    setClientData(clients);
  };

  useEffect(() => {
    init();
  }, []);

  const handleGrowerChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedData: any | undefined = growerData.find(
      (item: any) => item.id === event.target.value
    );
    setGrowerId(event.target.value);
    setAvailableFarms(selectedData["farms"]);
  };

  const handleFruitChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedData: Commodity | undefined = fruitData?.find(
      (item: any) => item.id === event.target.value
    );
    setCommodityId(event.target.value);
    if (selectedData) {
      setAvailableFruitVarieties(selectedData["varieties"]);
    }
  };

  const createOptions = (data: DataObject[]) => {
    return data?.map((value) => (
      <option key={value.id} value={value.id}>
        {value.name}
      </option>
    ));
  };

  const postHarvest = (e: any) => {
    e.preventDefault();
    const data = {
      growerId: growerId,
      farmId: farmId,
      clientId: clientId,
      commodityId: commodityId,
      varietyId: varietyId,
    };

    fetch("https://testapi.onesta.farm/v1/harvests", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setError(true);
        } else {
          setError(false);
        }
      });
  };

  return (
    <div className="bg-white my-8">
      <form onSubmit={(e) => postHarvest(e)} method="post">
        <div className="p-5 flex flex-col content-center">
          <div className="flex mb-6">
            <div className="flex flex-col mr-6 w-1/2">
              <label className="mb-2" htmlFor="grower">
                Agricultor
              </label>
              <select
                onChange={handleGrowerChange}
                defaultValue=""
                className="border border-lightGray2 py-2.5 w-full"
                name="grower"
                id="grower"
              >
                <option value="" hidden disabled></option>
                {createOptions(growerData)}
              </select>
            </div>
            <div className="flex flex-col  w-1/2">
              <label className="mb-2" htmlFor="field">
                Campo
              </label>
              <select
                onChange={(e) => setFarmId(e.target.value)}
                defaultValue=""
                className="border border-lightGray2 py-2.5 w-full"
                name="field"
                id="field"
              >
                <option value="" hidden disabled></option>
                {createOptions(availableFarms)}
              </select>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="flex flex-col mr-6 w-1/2">
              <label className="mb-2" htmlFor="fruit">
                Fruta
              </label>
              <select
                onChange={handleFruitChange}
                defaultValue=""
                className="border  border-lightGray2 py-2.5 w-full"
                name="fruit"
                id="fruit"
              >
                <option value="" hidden disabled></option>
                {createOptions(fruitData)}
              </select>
            </div>
            <div className="flex flex-col w-1/2">
              <label className="mb-2" htmlFor="variety">
                Variedad
              </label>
              <select
                onChange={(e) => setVarietyId(e.target.value)}
                defaultValue=""
                className="border  border-lightGray2 py-2.5 w-full"
                name="variety"
                id="variety"
              >
                <option value="" hidden disabled></option>
                {createOptions(availableFruitVarieties)}
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="client">Cliente</label>
            <select
              onChange={(e) => setClientId(e.target.value)}
              defaultValue=""
              className="border border-lightGray2 py-2.5 w-full"
              name="client"
              id="client"
            >
              <option value="" hidden disabled></option>
              {createOptions(clientData)}
            </select>
          </div>
          {error && <p className="text-redDark">Invalid data</p>}
          <button
            className="self-end bg-primary text-white py-2.5 px-6 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddHarvestForm;
