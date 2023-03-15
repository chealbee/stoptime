import { useEffect, useState } from "react";
import { isNull } from "util";

export default function Home() {
  const [isTimeron, setIsTimeron] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // @ts-ignore
    let interaval = undefined;

    if (isTimeron) {
      interaval = setInterval(() => setTime((prev) => prev + 10), 10);
    } else if (!isTimeron) {
      clearInterval(interaval);
    }
    return () => {
      // @ts-ignore
      clearInterval(interaval);
    };
  }, [isTimeron]);

  return (
    <>
      <div className="container">
        <div className="display">
          <p>
            {Math.floor(time / 3600000) % 100 < 10
              ? "0" + (Math.floor(time / 3600000) % 100)
              : Math.floor(time / 3600000) % 100}
          </p>
          :
          <p>
            {Math.floor(time / 60000) % 100 < 10
              ? "0" + (Math.floor(time / 60000) % 100)
              : Math.floor(time / 60000) % 100}
          </p>
          :
          <p>
            {Math.floor(time / 1000) % 100 < 10
              ? "0" + (Math.floor(time / 1000) % 100)
              : Math.floor(time / 1000) % 100}
          </p>
          :
          <p>
            {Math.floor(time / 10) % 100 < 10
              ? "0" + (Math.floor(time / 10) % 100)
              : Math.floor(time / 10) % 100}
          </p>
        </div>
        <div className="buttons">
          {!time && (
            <button className="startButton" onClick={() => setIsTimeron(true)}>
              start
            </button>
          )}

          {time > 0 && !isTimeron && (
            <button className="startButton" onClick={() => setIsTimeron(true)}>
              resume
            </button>
          )}
          {isTimeron && (
            <button className="stopButton" onClick={() => setIsTimeron(false)}>
              stop
            </button>
          )}

          {time > 0 && (
            <button className="resetButton" onClick={() => setTime(0)}>
              reset
            </button>
          )}
        </div>
      </div>
    </>
  );
}
