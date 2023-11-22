const Contact = () => {
  const sube = [
    {
      id: 1,
      title: "Merkez Şube Yüzüncüyıl",
      tel: "(0242) 243 69 93",
      faks: "(0242) 248 53 58",
      email: "info@depostar.com",
      address: "altındağ mahallesi 150. sokak no:2 aydın kanza parkı yanı",
    },
    {
      id: 2,
      title: "Eski Sanayi",
      tel: "(0242) 345 00 00",
      faks: "(0242) 243 53 58",
      email: "info@depostar.com",
      address: "sedir mahallesi akın caddesi güzelyıldız apt. no:10",
    },
    {
      id: 3,
      title: "Ahatlı",
      tel: "(0242) 229 33 32",
      faks: "(0242) 243 53 58",
      email: "info@depostar.com",
      address:
        "kültür mahallesi 75. yıl bulvarı yusuf bey apt. galericiler sitesi karşısı",
    },
    {
      id: 4,
      title: "Doğu Garajı",
      tel: "(0242) 322 24 04",
      faks: "(0242) 248 53 58",
      email: "info@depostar.com",
      address: "zerdalilik mahallesi cebesoy caddesi şafak apt. no:18-19",
    },
  ];
  return (
    <div className="mt-24">
      <h1 className="text-center mt-16 ssm:mt-12 pl-12 text-4xl font-bold mmd:text-3xl">
        İletişim Bilgileri
      </h1>
      <div className="grid grid-cols-2 smm:grid-cols-1 items-start pl-14 pr-14 justify-center gap-24 ssm:gap-6 mt-12 ssm:mt-6">
        <div className="border border-slate-200 shadow-xl border-opacity-50 p-4 h-info-cont ssm:h-car-image-xl">
          <h1 className="text-3xl text-center font-bold lgs:text-2xl smd:text-xl">
            Şubelerimiz
          </h1>
          {sube.map((s) => {
            return (
              <div
                key={s.id}
                className="bg-mainWhite shadow-xl border-b-2 border-l-2 border-slate-300 text-indigo-950 p-2 pl-4 pr-4 rounded-md mt-2"
              >
                <h1 className="text-xl font-bold underline lgs:text-lg smd:text-sm">
                  {s.title}
                </h1>
                <div className="text-sm lgs:text-xs font-bold">
                  <p>
                    <span className="uppercase smd:capitalize">Tel: </span>
                    <span className="smd:text-xs">{s.tel}</span>
                  </p>
                  <p>
                    <span className="uppercase smd:capitalize">Faks: </span>
                    <span>{s.faks}</span>
                  </p>
                  <p>
                    <span className="uppercase smd:capitalize">E-posta: </span>
                    <span>{s.email}</span>
                  </p>
                  <p className="">
                    <span className="uppercase smd:capitalize">Adres: </span>
                    <span className="capitalize">{s.address}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border border-slate-200 shadow-xl border-opacity-50 p-4 h-info-cont smm:h-sm-info-cont ssm:h-ssm-info-cont">
          <h1 className="text-center text-3xl font-bold lgs:text-2xl smd:text-xl">
            Bilgi Talep Formu
          </h1>
          <form className="p-2 pt-4 mt-2 flex flex-col items-center gap-2 justify-center">
            <div className="flex flex-col items-start justify-start">
              <label className="text-lg lgs:text-sm font-bold ml-2 text-blue-950 text-end smd:text-xs">
                Ad Soyad:{" "}
              </label>
              <input
                type="text"
                required
                className="bg-mainWhite shadow-xl border-2 border-slate-400 smd:text-xs text-slate-950 p-1 rounded-md ml-2 w-search-input lgs:w-64 font-bold smd:w-52 smd:h-6 smm:w-72"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <label className="text-lg lgs:text-sm font-bold ml-2 text-end text-blue-950 smd:text-xs">
                E-posta:{" "}
              </label>
              <input
                type="e-mail"
                required
                className="bg-mainWhite shadow-xl border-2 smd:text-xs border-slate-400 text-slate-950 p-1 rounded-md ml-2 w-search-input lgs:w-64 font-bold smd:w-52 smd:h-6 smm:w-72"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <label className="text-lg lgs:text-sm font-bold ml-2 text-end text-blue-950 smd:text-xs">
                Telefon:{" "}
              </label>
              <input
                type="number"
                required
                className="bg-mainWhite shadow-xl text-slate-950 smd:text-xs border-2 border-slate-400 p-1 rounded-md ml-2 w-search-input lgs:w-64 font-bold smd:w-52 smd:h-6 smm:w-72"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <label className="text-lg lgs:text-sm font-bold ml-2 text-end text-blue-950 smd:text-xs">
                Mesaj:{" "}
              </label>
              <textarea
                name="textarea"
                required
                id=""
                cols="30"
                rows="10"
                className="bg-mainWhite smd:text-xs shadow-xl border-2 border-slate-400 text-slate-950 p-1 rounded-md lgs:w-64 ml-2 w-search-input font-bold smd:w-52 smd:h-24 smm:w-72"
              ></textarea>
            </div>
            <div className="mt-2 ml-auto mr-auto">
              <button className="bg-slate-700 text-slate-50 p-2 rounded-md ml-2 w-40 lgs:w-32 lgs:p-1 font-bold smd:w-24">
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
