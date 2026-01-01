import React from "react";

const Last = () => {
  return (
    <div className="w-full bg-black py-10">

      {/* SECTION TITLE */}
      <h3 className="text-white text-3xl font-light mb-8 ml-6">
        OUR ADVANTAGES
      </h3>

      {/* ====== FIRST ROW ====== */}
      <div className="w-[95%] mx-auto flex gap-6 h-[45vh] mb-10">

        {/* IMAGE */}
        <div className="w-1/2 h-full rounded-2xl bg-[url('https://plus.unsplash.com/premium_photo-1765841918711-783b69ab0ced?w=600&auto=format&fit=crop&q=60')] bg-cover bg-center"></div>

        {/* TEXT CARDS */}
        <div className="w-1/2 h-full flex flex-col gap-6">

          <div className="bg-zinc-800 rounded-2xl p-6 flex justify-between items-center h-1/2">
            <div>
              <h4 className="text-white text-sm mb-1">INDEPENDENT DESIGNERS</h4>
              <p className="text-gray-400 text-xs">
                Discover creativity and originality from independent designers worldwide.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center text-white">↗</div>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6 flex justify-between items-center h-1/2">
            <div>
              <h4 className="text-white text-sm mb-1">EXCLUSIVE & UNIQUE</h4>
              <p className="text-gray-400 text-xs">
                Curated collections with individuality and premium quality.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center text-white">↗</div>
          </div>

        </div>
      </div>

      {/* ====== SECOND ROW ====== */}
      <div className="w-[95%] mx-auto flex gap-6 h-[45vh]">

        {/* TEXT FIRST */}
        <div className="w-1/2 h-full flex flex-col gap-6">

          <div className="bg-zinc-800 rounded-2xl p-6 flex justify-between items-center h-1/2">
            <div>
              <h4 className="text-white text-semibold mb-1">HIGH QUALITY</h4>
              <p className="text-gray-400 text-xs">
                Crafted with precision using premium materials for lasting quality.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center text-white">↗</div>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6 flex justify-between items-center h-1/2">
            <div>
              <h4 className="text-white text-sm mb-1 text-semibold ">ECO FRIENDLY</h4>
              <p className="text-gray-400 text-xs">
                Sustainable practices for a better future.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center text-semibold">↗</div>
          </div>

        </div>

        {/* IMAGE */}
        <div className="w-1/2 h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80')] bg-cover bg-center"></div>

      </div>

    </div>
  );
};

export default Last;
