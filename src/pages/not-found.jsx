import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"
export function NotFound(){
    return(
        <section className="h-lvh" style={{backgroundColor:"rgba(0, 32, 46, 0.8)"}} >
    <div className="py-8 px-4  mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl" style={{color:"#00FF88"}}>404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 " style={{color:"#BFEDFC"}}>Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
             <Link
            to="/"
            className="inline-flex items-center gap-2 mb-4 text-sm hover:opacity-80 transition-opacity"
            style={{ color: "#BFEDFC" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>   
    </div>
</section>
    )
}