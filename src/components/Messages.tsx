import { Footer } from "./Footer";

export function Messages(){
    return  <div
    className="bg-cover bg-center h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url('https://img.freepik.com/free-vector/modern-mobile-phone-with-icons-background_23-2147574295.jpg?t=st=1694716385~exp=1694716985~hmac=e1f84429669c7d78d09a268aaece43c8346f16c85df09b9d2d5ba98e4dd07449')`,
      filter: 'grayscale(100%)', // Apply grayscale filter
    }}
  >
  <Footer/>
  </div>
}