'use client'


export default function AboutUsCards() {
  const info = [
    {
      id: "1",
      photo: "./vatsal.jpg",
      name: "Vatsal Bateriwala",
      email: "vatsalbateriwala59@gmail.com",
      call: "8401062005",
      link1: "https://www.linkedin.com/in/vatsal-bateriwala-378b89276/",
      link2: "https://github.com/Vatsal565",
      link3: "https://www.instagram.com/_vatsal__05/"
    },
    {
      id: "2",
      photo: "./priya.jpg",
      name: "Priya Bhanderi",
      email: "priyabhanderi2@gmail.com",
      call: "9328805046",
      link1: "https://www.linkedin.com/in/priya-bhanderi-7b0b1227a/",
      link2: "https://github.com/Priya584",
      link3: "https://www.instagram.com/_bhanderi_892/"
    },
    {
      id: "3",
      photo: "./diya.jpg",
      name: "Diya Pansheriya",
      email: "pansheriyadiya@gmail.com",
      call: "9408532497",
      link1: "https://www.linkedin.com/in/diya-pansheriya-02aa462a9/",
      link2: "https://github.com/Diya5772",
      link3: "https://www.instagram.com/_diya_pa27/"
    },
    {
      id: "4",
      photo: "./miten.jpg",
      name: "Miten Gandhi",
      email: "mjgandhi2305@gmail.com",
      call: "8799377093",
      link1: "https://www.linkedin.com/in/miten-j-gandhi-0917471a9/",
      link2: "https://github.com/mjgandhi2305",
      link3: "https://www.instagram.com/miten_2305/"
    }
  ]


  return <div>
    <div className="font-poppins font-black italic text-5xl flex justify-center mt-9 text-[#25367a] text-center">
      Meet the Brainy Bunch Behind the Code
    </div>
    <div className="w-full flex justify-around items-center mt-7 h-[80vh] max-xl:flex-wrap bg-gradient-to-t from-[#627cdd] to-[#EAEEFE]">

      {
        info.map(item => <div className="relative w-[350px] h-[190px] bg-white rounded-[20px] shadow2 customStyle hover:h-[450px] my-11 group">
          <div className="absolute w-[150px] h-[150px] bg-white shadow2 left-[50%] top-[-50px] translate-x-[-50%] rounded-[20px] overflow-hidden customStyle group-hover:w-[200px] group-hover:h-[200px]">
            <img src={item.photo} className="absolute top-0 left-0 w-[100%] h-[100%] object-cover object-center"></img>
          </div>
          <div className="absolute w-[100%] h-[100%] flex justify-center items-end overflow-hidden">
            <div className="px-10 pt-10 text-center w-[100%] customStyle translate-y-[185px] group-hover:translate-y-0">
              <h2 className="text-2xl font-poppins font-bold">{item.name}</h2>
              <span className="text-gray-600 opacity-70 font-poppins font-semibold">B.Tech in Artificial Intelligence</span>

              <div className="data p-3">
                <div className="text-md flex gap-5 items-start mb-2">
                  <img src="/college.svg" alt="college" />
                  <p className="text-left text-gray-800 font-poppins font-semibold tracking-wide">SVNIT-Surat,Gujarat</p>
                </div>
                <div className="flex gap-5 items-center mb-2">
                  <img src="/mail.svg" alt="mail" />
                  <p className="text-gray-800 font-poppins font-semibold tracking-wide">{item.email}</p>
                </div>
                <div className="flex gap-5 items-center mb-5">
                  <img src="/call.svg" alt="call" />
                  <p className="text-gray-800 font-poppins font-semibold tracking-wide">{item.call}</p>
                </div>
                <div className="flex items-center gap-5 justify-center mb-5">
                  <a href={item.link1} target="_blank"><div className="w-12 h-12 rounded-full bg-gray-100 shadow1 shadow-gray-300 hover:shadow-inner flex justify-center items-center"> <img src="./linkedin.svg" alt="linkedin" className="w-5 h-5 cursor-pointer" /></div></a>
                  <a href={item.link2} target="_blank"><div className="w-12 h-12 rounded-full bg-gray-100 shadow1 shadow-gray-300 hover:shadow-inner flex justify-center items-center"> <img src="./github.svg" alt="github" className="w-5 h-5 cursor-pointer" /></div></a>
                  <a href={item.link3} target="_blank"><div className="w-12 h-12 rounded-full bg-gray-100 shadow1 shadow-gray-300 hover:shadow-inner flex justify-center items-center"> <img src="./instagram.svg" alt="instagram" className="w-5 h-5 cursor-pointer" /></div></a>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  </div>

}



