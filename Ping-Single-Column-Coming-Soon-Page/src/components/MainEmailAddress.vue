<template>
  <div class="main-email-address">
    <form
      class="flex flex-col md:flex-row items-center justify-center gap-4 my-8"
    >
    <div class="flex flex-col items-center md:items-start justify-start gap-2 md:min-h-20 w-full md:w-80">
      <input
        type="email"
        class="px-4 py-2 rounded-full border-2 border-gray-200 text-sm placeholder:text-[15px] w-full md:w-80 peer ... invalid:border-pink-600 invalid:text-pink-600  focus-visible:shadow-md invalid:focus-visible:outline-pink-600"
        placeholder="Your email address..."
      />
      <span class=" text-[.65rem] hidden peer-invalid:block text-pink-600 px-4"><i>
        Please provide a valid email address</i>
      </span>
    </div>
      <button
        type="submit"
        class="shadow-shadow-custom w-full md:w-40 rounded-full border-2 border-custom-blue bg-custom-blue text-white font-semibold text-[13px] px-10 py-2 md:py-2.5 hover:bg-opacity-80 hover:border-opacity-5 self-start"
      >
        Notify Me
      </button>
    </form>
  </div>
</template>
