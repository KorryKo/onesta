const AddHarvestForm = () => {
  return (
    <div className="bg-white my-8">
      <form action="/send-data-here" method="post">
        <div className="p-5 flex flex-col content-center">
          <div className="flex mb-6">
            <div className="flex flex-col mr-6 w-1/2">
              <label className="mb-2" htmlFor="grower">
                Agricultor
              </label>
              <select
                defaultValue=""
                className="border border-lightGray2 py-2.5 w-full"
                name="grower"
                id="grower"
              >
                <option value="" hidden disabled></option>
                <option value="volvo">Volvo</option>
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
                defaultValue=""
                className="border border-lightGray2 py-2.5 w-full"
                name="field"
                id="field"
              >
                <option value="" hidden disabled></option>
                <option value="volvo">Volvo</option>
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
                defaultValue=""
                className="border  border-lightGray2 py-2.5 w-full"
                name="fruit"
                id="fruit"
              >
                <option value="" hidden disabled></option>
                <option value="volvo">Volvo</option>
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
                defaultValue=""
                className="border  border-lightGray2 py-2.5 w-full"
                name="variety"
                id="variety"
              >
                <option value="" hidden disabled></option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="client">Cliente</label>
            <select
              defaultValue=""
              className="border border-lightGray2 py-2.5 w-full"
              name="client"
              id="client"
            >
              <option value="" hidden disabled></option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

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
