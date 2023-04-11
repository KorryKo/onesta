import { useState } from "react";

const AddHarvestForm = () => {
  const [growerId, setGrowerId] = useState<string>("");
  const [farmId, setFarmId] = useState<string>("");
  const [clientId, setClientId] = useState<string>("");
  const [commodityId, setCommodityId] = useState<string>("");
  const [varietyId, setVarietyId] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

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
                onChange={(e) => setGrowerId(e.target.value)}
                defaultValue=""
                className="border border-lightGray2 py-2.5 w-full"
                name="grower"
                id="grower"
              >
                <option value="" hidden disabled></option>
                <option value="425cee53-a3fe-4fb3-91b6-bf774ff69020">
                  Volvo
                </option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
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
                <option value="e998ba72-3219-4d10-8627-3e138d674125">
                  Volvo
                </option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="flex flex-col mr-6 w-1/2">
              <label className="mb-2" htmlFor="fruit">
                Fruta
              </label>
              <select
                onChange={(e) => setCommodityId(e.target.value)}
                defaultValue=""
                className="border  border-lightGray2 py-2.5 w-full"
                name="fruit"
                id="fruit"
              >
                <option value="" hidden disabled></option>
                <option value="00ea5b4d-078f-430a-bf3c-497413ed4d86">
                  Volvo
                </option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
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
                <option value="1d6fd68c-7d49-4266-b31c-a3c2f25cd5c5">
                  Volvo
                </option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
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
              <option value="00de2864-472e-4f19-8ffe-e289964b108c">
                Volvo
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
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
