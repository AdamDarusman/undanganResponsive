export default function Section() {
    return (
        <div className="text-center relative mt-[50px] ml-[30px] lg:ml-[300px] xl:ml-[100px] ">
            <div className="Frame28 h-[754.51px] p-[0px] flex-col justify-start items-center gap-7 inline-flex">
            <div className="Frame57 p-[0px] justify-center items-center gap-4 inline-flex">
                <img className="2 w-[70px] md:w-[90px] h-[50px] md:h-[70px] origin-top-left"
                    src="3 2.png" />
                <div className=" text-center text-cyan-800 text-[27px] md:text-[45px] lg:text-[50px] font-normal leading-loose font-bold" style={{ fontFamily: 'DM Serif Text' }}>Lokasi
                    Pernikahan</div>
                <img className="3 w-[70px] md:w-[90px] h-[50px] md:h-[70px]" src="3 3.png" />
            </div>
            <div className="Frame27 p-[0px] flex-col justify-start items-center gap-8 flex">
                <div className="Frame26 p-[10px] bg-zinc-200 flex-col justify-start items-start gap-[10px] flex">
                    {/* <img className="BasemapImage w-[647px] h-[405px]" /> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.422369069539!2d106.8313938!3d-6.4680533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1e4749cdd9b%3A0x6199f7825ad98508!2sPT%20MATRA%20HILLINDO%20TEKNOLOGI!5e0!3m2!1sid!2sid!4v1687503075658!5m2!1sid!2sid" className="w-[370px] md:w-[600px] h-[220px] md:h-[350px] "></iframe>
                </div>
                <div className="Frame20 p-[0px] flex-col justify-start items-center gap-[4px] flex">
                    <div className="Frame14 p-[0px] flex-col justify-start items-center gap-4 flex">
                        <div
                            className=" text-center text-black text-[25px] md:text-[40px] font-normal leading-loose font-bold" style={{ fontFamily: 'DM Serif Text' }}>
                            Swasana Grand Ballroom</div>
                        <div
                            className=" text-center w-[510px] md:w-[750px] text-black text-[20px] md:text-[25px] font-normal leading-loose tracking-wide" style={{ fontFamily: 'Antic Didone' }}>
                            Jl. Gatot Subroto No.10 Rt 06/01, Kec. Mampang Prpt., Kota Jakarta Selatan, DKI
                            Jakarta<br /></div>
                        <div
                            className="Frame6 px-[22.34px] py-4 rounded-[34.91px] shadow border border border border border-cyan-800 justify-center items-center gap-[11.17px] inline-flex">
                            <div
                                className="BukaGoogleMap text-center text-cyan-800 text-[20px] md:text-[30px] font-normal leading-none" style={{ fontFamily: 'Antic Didone' }}>
                                Buka Google Map</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}