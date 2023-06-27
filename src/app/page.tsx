"use client"

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "../lib/axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  const [brideGroom, setBrideGroom] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/invitation");
        setData(res.data)
        setBrideGroom(res.data.bridegroom)
      } catch (error) {
        console.log(error);
      }
    };
    // console.log(brideGroom);
    // console.log(data);
    getData()
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url('/Rectangle1.png')` }}
    >
      <div className="text-center w-[1440px] h-[1070px]">
        <div className="left-[-86px] top-[-167px]" />
        <div className="Frame5 p-[0px] left-[407px] top-[86px] flex-col justify-start items-center gap-[262px] inline-flex">
          <div className="Frame2 p-[0px] justify-start items-center gap-[13.10px] inline-flex relative top-14">
            <div className="Frame4 p-2 justify-start items-start gap-2 flex">
              
            {brideGroom.map((res,index) => (
              <div
              key={index}
                className="Ariana text-center text-white text-[25px] md:text-[32px] font-normal leading-normal"
                style={{ fontFamily: "Edwardian Script ITC" }}
              >
                  {res.name_female}
              </div>
                ))}
            </div>
            <img
              className="WeddingRing1 w-[40.33px] h-[40.33px] md:w-[66.33px] md:h-[66.33px]"
              src="logo1.png"
            />
            <div className="Frame3 p-2 justify-start items-start gap-2 flex">
              {brideGroom.map((res, index) => (
                <div
                key={index}
                  className="Gunawan text-center text-white text-[25px] md:text-[32px] leading-normal"
                  style={{ fontFamily: "Edwardian Script ITC" }}
                >
                  {res.name_male}
                </div>
              ))}
            </div>
          </div>
          <div className="Frame1 p-[0px] flex-col justify-center items-center gap-[50px] flex">
            <div
              className="text-center text-white text-[15.722px] md:text-[22px] relative top-8"
              style={{ fontFamily: "Inter" }}
            >
              Kepada Yth
              <br />
              Bapak/ Ibu/ Saudara (i)
            </div>
            <div
              className="NamaTamuUndangan text-center text-white text-[32px] md:text-[64px] font-normal font-bold"
              style={{ fontFamily: "DM Serif Display" }}
            >
              Nama Tamu Undangan
            </div>
            <div
              className="DiTempat text-center text-white text-[16px] md:text-[22px] font-normal mt-[-25px]"
              style={{ fontFamily: "inter" }}
            >
              Di tempat
            </div>
            <div className="Frame6 px-[15px] md:px-[22.34px] py-2 md:py-4 left-[599px] mt-52 md top-[876px] rounded-[34.91px] shadow border border border border border-white justify-center items-center gap-[11.17px] inline-flex">
              <button
                className="text-center text-white text-[16px] font-normal leading-none md:text-[22.343183517456055px]"
                style={{ fontFamily: "Antic Didone" }}
              >
                Buka Undangan
              </button>
              <div
                className="w-[27.34px] h-[22.34px] relative"
                style={{ backgroundImage: `url('/group1.png')` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
