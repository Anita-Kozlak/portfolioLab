import React from 'react';
export default function User({ user, index}) {
  


   return (
     <>
       <div>
         <h3>
           {index + 1}.{user}
        
         </h3>
       </div>
     </>
   );


}

 