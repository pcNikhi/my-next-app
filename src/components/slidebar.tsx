// rafce

const Slidebar = () => {
  return (
    <div className="text-center">
      <img
        src="data:image/png;base64,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"
        alt=""
        className="w-32 h-32 mx-auto "
      />
      <h3 className="mx-auto my-4 text-3xl font-medium">
        <span>Terralogic</span>
      </h3>
      <p className="mx-auto my-4 text-3xl font-medium bg-slate-500">company</p>
      <a className="mx-auto my-4 text-3xl font-medium bg-slate-500">download</a>
      <div className="flex justify-around my-5 text-green-300 md:w-full">
        <a>
            <button onClick={()=>window.open('mailto:ghbjk@gamil.com')}>
          <img
            className="h-6 cursor-pointer w mx-auto-6"
            src="data:image/png;base64,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"
          ></img>
          </button>
        </a>
        <a>
            <button onClick={()=>window.open('https://www.youtube.com/channel/UC_bktWm8wMCeEh7Ht3UhE-Q')}>
          <img
            className="h-6 cursor-pointer w mx-auto-6"
            src="data:image/png;base64,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"
          />
          </button>
        </a>
        <a>
          <img
            className="h-6 cursor-pointer w mx-auto-6"
            src="data:image/png;base64,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"
          ></img>
        </a>
      </div>
      <div className="py-4 my-4 text-center bg-gray-200">
        <div>
          <span>bangalore</span>
        </div>
        <p>abc@gmail.com</p>
      </div>
    </div>
  );
};
export default Slidebar;