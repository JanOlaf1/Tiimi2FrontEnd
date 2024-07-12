import logo from './assets/react.svg';

function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = " Tiimi 2 Oy";

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white p-4">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
        <div className="flex items-center">
          <img className="h-10" src={logo} alt="Logo" />
          <h3 className="ml-2 font-bold text-xl">Tiimi 2</h3>
        </div>
        <div className="text-sm">
          <div>Ratapihantie 13</div>
          <div>00520 Helsinki</div>
          <div>Y-tunnus: 1234567-8</div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 md:mt-0">
        <h3 className="font-bold">Asiointi</h3>
        <div className="text-sm">
          <div className="flex items-center">
            <div className="mr-4">
              <div>Tiimi</div>
              <div>P. 000 000 0000</div>
            </div>
            <div className="w-px h-6 bg-gray-400"></div>
            <div className="ml-4">
              <div>Tiimi 2</div>
              <div>P. 000 000 0000</div>
            </div>
          </div>
          <div className="mt-2">Sähköposti@sähköposti.fi</div>
          <div>Rakkaudesta lemmikkeihin</div>
        </div>
      </div>
      <div className="text-sm mt-4 md:mt-0">
        {companyName} &copy; {currentYear}
      </div>
    </footer>
  );
}

export default Footer;
