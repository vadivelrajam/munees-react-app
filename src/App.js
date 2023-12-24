   import React from "react";
   import  ReactDOM  from "react-dom/client";
   import Header from './components/Header'


//    header 
       // #imglogo
       // #nav-items

// body
   // #continaer
        //rescard


const AppLayout = () => {
    return (
        <div id="app">
            <Header />
        </div>
    )
}
   

   
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout />);

    
  
   
