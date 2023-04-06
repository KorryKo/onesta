import React from "react";

interface Props {
  data: any[];
}

const DataTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }
  const keys = Object.keys(data[0]);

  const getRoundedClassName = (index: number) => {
    return `${index === 0 ? "rounded-l-md" : ""} ${
      index === keys.length - 1 ? "rounded-r-md" : ""
    } ${index !== 0 && index !== keys.length - 1 ? "rounded-none" : ""}`;
  };
  
  return (
    <div className="mt-9 bg-white p-5">
      <table className="min-w-full">
        <thead className={"bg-primaryLight3 "}>
          <tr className={"divide-y divide-x divide-white"}>
            {keys.map((key, index) => (
              <th
                key={key}
                scope="col"
                className={`${getRoundedClassName(index)} font-normal `}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item, index) => (
            <tr key={index} className={"divide-y divide-x divide-white"}>
              {keys.map((key, index) => {
                const value = item[key];
                if (typeof value === "object" && value !== null) {
                  if (Array.isArray(value)) {
                    return (
                      <td
                        key={key}
                        className={`${getRoundedClassName(
                          index
                        )} px-6 py-4 whitespace-nowrap  shadow-md rounded-sm`}
                      >
                        <ul className="list-disc list-inside">
                          {value.map((val: any) => (
                            <li key={val.id} className="text-sm">
                              {val.name}
                            </li>
                          ))}
                        </ul>
                      </td>
                    );
                  } else {
                    return (
                      <td
                        key={key}
                        className={`${getRoundedClassName(
                          index
                        )} px-6 py-4 whitespace-nowrap  shadow-md rounded-sm`}
                      >
                        <ul className="list-disc list-inside">
                          {Object.keys(value).map((nestedKey) => (
                            <li
                              key={nestedKey}
                              className="text-sm text-gray-900"
                            >
                              {nestedKey}: {value[nestedKey]}
                            </li>
                          ))}
                        </ul>
                      </td>
                    );
                  }
                } else {
                  return (
                    <td
                      key={key}
                      className={`${getRoundedClassName(
                        index
                      )} px-6 py-4 whitespace-nowrap text-sm  shadow-md rounded-sm`}
                    >
                      {value}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
