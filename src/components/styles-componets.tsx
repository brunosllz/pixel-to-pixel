export function StylesComponents() {
  return (
    <div>
      <div className="relative w-full">
        <input
          type="text"
          id="floating_filled"
          className="peer h-16 w-full appearance-none border border-[#D9D9D9] bg-transparent px-4 pb-[11.5px] pt-[31.5px] leading-none text-gray-900 transition-all hover:border-black focus:border-black focus:shadow-[4px_4px_0px_0px_#040404] focus:outline-none focus:ring-0"
          placeholder=" "
        />

        <label
          htmlFor="floating_filled"
          className="absolute start-4 top-6 z-10 origin-[0] -translate-y-4 scale-75 transform text-black duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#8E8E8E] peer-focus:top-6 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-black"
        >
          Seu nome
        </label>
      </div>

      <button className="border border-[#D9D9D9] p-4 transition-all hover:border-black hover:shadow-[4px_4px_0px_0px_#040404]">
        Teste
      </button>

      <button className="relative inline-flex h-16 overflow-hidden rounded-full bg-[#040404] px-8 py-[18px] text-xl text-white before:absolute before:inset-0 before:h-full before:w-0 before:bg-zinc-700 before:transition-all hover:before:w-full focus:outline-none focus:ring-1 focus:ring-black">
        <span className="z-10">Button</span>
      </button>
    </div>
  )
}
