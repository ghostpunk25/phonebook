import { AppBar } from "components/AppBar/AppBar";
import { Box } from "components/Box/Box";
import { Suspense } from "react";
import { Outlet } from "react-router-dom"



export const Layout = () => {

   return (
      <Box display='flex' overflow='auto' pb='5' flexDirection='column' flex='0 1 500px' background='#7e9ba2' >
         <AppBar />
         <Suspense fallback={null}>
            <Outlet />
         </Suspense>
      </Box >
   );
};