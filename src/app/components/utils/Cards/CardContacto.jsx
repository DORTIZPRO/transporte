import React from "react";

const CardContacto = () => {
  function openWhatsAppChat() {
    window.open("https://wa.me/56937409813");
  }
  return (
    <>
      <div class="shadow-lg rounded-xl p-2 bg-white relative overflow-hidden">
        <div class="flex items-center mb-2 py-2 rounded-lg bg-blue-500">
          <div class="pl-1">
            <div class="text-white text-lg md:text-2xl font-semibold">
              Contáctanos y Ubícanos
            </div>
          </div>
        </div>
        <div class="w-full px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-0">
            <div class="w-full rounded-lg py-2 flex items-center justify-center flex-col shadow">
              <div className="flex flex-col md:h-196 border-b-2">
                <div className="flex items-center justify-center ">
                  <ul className="p-2 m-2 md:p-4 md:mt-4">
                    <li className="text-sm md:text-xl uppercase font-semibold md:font-medium my-2 w-full inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 mr-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      +569 37409813
                    </li>
                    <div className="w-full">
                      <button
                        onClick={openWhatsAppChat}
                        class="relative w-full inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-green-600 hover:bg-green-700 focus:border-[#B3B3FD] focus:bg-green-600 px-4 py-1 sm:py-1.5 sm:px-5"
                      >
                        Escríbenos a WhatsApp
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:h-196 border-b-2">
                <div className="flex items-center justify-center">
                  <ul className="p-2 m-2 md:p-6 md:mt-14">
                    <li className="text-xs md:text-lg uppercase font-semibold md:font-medium my-2  w-full inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1 w-5 h-5 md:mr-2 md:w-6 md:h-6"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                      valunasconstrucciones@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:h-196 border-b-2">
                <div className="flex items-center justify-center">
                  <ul className="p-2 m-2 md:p-4 md:mt-14">
                    <li className="text-sm md:text-xl uppercase font-semibold md:font-medium my-2 w-full inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 mr-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Uno sur 3915, Renca.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full rounded-lg flex flex-col justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1665.362416661214!2d-70.69979917388784!3d-33.4043423873159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c6a408387537%3A0xf479d4b149986005!2sUno%20Sur%203915%2C%20Renca%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1679933485081!5m2!1ses-419!2scl"
                allowFullScreen
                className="w-full h-80 md:h-128 rounded-lg p-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContacto;
