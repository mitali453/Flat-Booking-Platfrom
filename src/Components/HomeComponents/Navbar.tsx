import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}
const Navbar: FC<Props> = (props) => {
  return (
    <>
      <nav className="bg-gray-800 fixed z-50 w-full ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">


              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <button><svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg></button>

                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="block rounded-full h-10 w-auto" src="data:image/jpeg;base64,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" alt="Workflow" />

              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">

                  <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page" >Home</Link>

                  <Link to="/about" href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>

                  <Link to="/contactUs" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>

                  <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                </div>
               
              </div>
              
            </div>
            <div className="h-36 text-gray-400 flex space-x-4  pl-12">
                    {/* division for adding social media icons */}

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="42" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="42" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="42" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>

                </div>
            <div className="flex ">
                        <Link to="/formseller"><span className="bg-gray-400 text-white p-1 font-mono text-lg border border-white rounded-md"><button>Become a seller</button></span> </Link>
                    </div>



          </div>
         
        </div>





      </nav>












    </>
  );
};
Navbar.defaultProps = {
}
export { };
export default memo(Navbar);