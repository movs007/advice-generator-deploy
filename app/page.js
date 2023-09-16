"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  const handleButtonClick = () => {
    // Fetch data again when the button is clicked
    fetchAdvice();
    console.log(advice);
  };
  return (
    <main className="flex justify-center items-center	h-screen">
      <div className="card-container">
        <div className="card flex justify-center pt-8">
          <div>
            <div>
              <h2
                className="text-center"
                style={{
                  color: "#53FFAA",
                  fontSize: "13px",
                  letterSpacing: "4.09px",
                }}
              >
                ADVICE #<span>{advice.id}</span>
              </h2>
              <p
                className="text-center p-5 font-bold"
                style={{
                  color: "#CEE3E9",
                  fontSize: "28px",
                  letterSpacing: "-0.3px",
                }}
              >
                "{advice.advice}"
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Image src="line.svg" width={400} height={100} />
            </div>
          </div>
          <button
            className="button flex justify-center items-center"
            onClick={handleButtonClick}
          >
            <Image src="/shape.svg" width={28} height={28} />
          </button>
        </div>
      </div>
    </main>
  );
}
