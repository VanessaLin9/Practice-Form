const Home = () => {
  // TODO 首頁
  return (
   <div className="container mx-auto my-8 max-w-5xl h-screen">
    <div className="home flex flex-col justify-center items-start p-5">
      <h1 className="text-xl font-bold border-b border-black mb-5">React 表單練習</h1>
      <p>這是一個用於學習 React 表格建立和實時驗證的練習專案。</p>
      <p>使用 Create React App 構建，並使用 React Router DOM 建立單頁應用程序。</p>
      <p>專案中有兩個表格，分別使用 React 原生 useState 和 React Hook Form 建立。</p>
      <br />
    </div>
  </div>
  
  )
}

export default Home;