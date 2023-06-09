import "@/styles/loader.css"

export default function MainLoader() {
  return (
    <div className="w-full h-[calc(100vh-65px)] items-center justify-center flex">
      <div className="loader">
        <div className="loader__bar bg-primary"></div>
        <div className="loader__bar bg-primary"></div>
        <div className="loader__bar bg-primary"></div>
        <div className="loader__bar bg-primary"></div>
        <div className="loader__bar bg-primary"></div>
        <div className="loader__ball bg-primary"></div>
      </div>
    </div>
  )
}
