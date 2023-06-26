export default function Gallery(){
    return(

    <section id="gallery" className=" relative w-full h-fit m-auto bg-white pb-24 min-[499px]:pb-0 sm:pb-0 lg:pb-20 xl:pb-0 min-[1700px]:pb-0 min-[1700px]:h-[1700px] min-[2000px]:h-fit min-[3500px]:h-[2500px] min-[4000px]:h-[3000px]">
            <div className="Frame57 p-[0px] justify-center items-center gap-4 inline-flex w-full my-5">
      <img className="w-auto h-auto" src="/bl.png" />
      <div className="text-center text-[#0E5E6F] text-[40px] sm:text-[45px] md:text-[50px] lg:text-[52px] min-[2000px]:text-[90px] min-[2560px]:text-[110px] leading-tight sm:leading-loose font-bold" style={{ fontFamily: 'DM Serif Text' }}>Gallery</div>
      <img className="w-auto h-auto" src="/br.png" />
    </div>
  <div className="Frame54 justify-center gap-10 flex flex-wrap mt-2 mb-10 min-[2000px]:gap-20 ">
    <img className="object-cover max-[400px]:px-4  sm:mb-0 min-[2000px]:h-auto min-[2000px]:w-[650px]" src="/gallery1.png" />
    <img className="object-cover max-[400px]:px-4  sm:mb-0 min-[2000px]:h-auto min-[2000px]:w-[650px]" src="gallery2.png" />
    <img className="object-cover max-[400px]:px-4  sm:mb-0 min-[2000px]:h-auto min-[2000px]:w-[650px]" src="gallery3.png" />
  </div>
  <div className="w-full py-3 px-4 min-[1700px]:px-8 items-center">
      <div className=" h-0 max-[3000px]:pb-[56.25%] max-[3500px]:pb-0">
        <iframe
          className="top-0 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[700px] 2xl:h-[900px] min-[2560px]:h-[1300px] min-[3500px]:h-[1200px] min-[4000px]:h-[1800px] "
          src="https://www.youtube.com/embed/079v_9FSf8M"
          title="YouTube video"
          allowFullScreen
        />
      </div>
    </div>
  
       </section>
)
}
