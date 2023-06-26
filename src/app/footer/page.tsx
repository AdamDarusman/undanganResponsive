export default function Footer() {
return(
    <footer className="w-full bg-white  mb-10 h-fit pt-10 min-[1700px]:pt-0 pb-20 ">
        
  <div className="m-auto text-center text-cyan-800 max-[399px]:text-[45px] max-[500px]:text-[55px] sm:text-[64px] md:text-[64px] lg:text-[80px] text-[70px] font-normal leading-loose items-center min-[1700px]:text-[120px] min-[2000px]:text-[150px] min-[2559px]:text-[170px] min-[4000px]:text-[250px]" style={{ fontFamily: "Edwardian Script ITC" }}>Terima Kasih
  </div>
  <div className="flex justify-center">
  <img className="max-w-full w-auto sm:w-80 max-[500px]:w-48  2xl:w-[400px] min-[4000px]:w-[800px]" src="/footer.png" />
</div>

</footer>
)
}