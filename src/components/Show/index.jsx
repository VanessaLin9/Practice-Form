export default function show (props){
 return (
  <div className='container'>
    <div className="flex items-center justify-center">
      <h1>訂單資訊:</h1>
     <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  </div>
  
 )
}