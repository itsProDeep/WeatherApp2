import React, { useEffect, useState } from "react";
const Forecast = ({ fetchCity }) => {
  const [forecast, setforecast] = useState(null);
  const [forArr, setForArr] = useState(null);
  const [Error, setError] = useState(null);
  useEffect(() => {
    const fetchForeCast = async () => {
      const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${fetchCity}&APPID=3d711eccd7c978017f2594c82dd495cd&units=metric`;
      const response2 = await fetch(url2);
      if (response2.status >= 200 && response2.status <= 299) {
        const resJson2 = await response2.json();
        setforecast(resJson2);
        // console.log(resJson2);
      } else {
        setError("Error");
      }
    };
    fetchForeCast();
  }, [fetchCity]);
  useEffect(() => {
    if (forecast) {
      setForArr(forecast.list);
      // console.log(forArr);
      setError("");
    }
  }, [forecast]);

  return Error === "" ? (
    <div className="forecast">
      <tr>
        {forArr.map((obj, idx) => {
          if (idx < 7)
            return (
              <td
                className="table"
                style={{ width: "100px", border: "2px solid black" }}
              >
                {obj.main.temp}°C
                <p>{obj.dt_txt.toString().slice(11, 19)}</p>
              </td>
            );
        })}
      </tr>
    </div>
  ) : (
    <p></p>
  );
};

export default Forecast;
