// import React from 'react';
// import Header from './Header';
// import SearchBar from './Search_Bar';
// import LeftName from './LeftName';
// import LeftP from './LeftP';
// import RightTop from './RightTop';
// import RightMiddle from './RightMiddle';
// import RightBottom from './RightBottom';
// import Bottom from './Bottom';

// const Layout = () => {
//     return (
//         <div className="min-h-screen">
//             <div className="fixed w-full z-10 bg-white">
//                 <Header />
//             </div>
//             <div className="grid grid-cols-3 gap-4 pt-24 px-4"> {/* Adjust pt-24 based on header height */}
//                 <div className="col-span-1 grid grid-rows-4 gap-4">
//                     <SearchBar />
//                     <LeftName />
//                     <LeftP />
//                     <Bottom />
//                 </div>
//                 <div className="col-span-2 grid grid-rows-3 gap-4">
//                     <RightTop />
//                     <RightMiddle />
//                     <RightBottom />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Layout;
import React from 'react';
import Header from './Header';
import SearchBar from './Search_Bar';
import LeftName from './LeftName';
import LeftP from './LeftP';
import RightTop from './RightTop';
import RightMiddle from './RightMiddle';
import RightBottom from './RightBottom';
import Bottom from './Bottom';

const Layout = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-3 fixed w-full z-10 bg-white">
                <Header />
            </div>
            <div className="col-span-1 lg:col-span-1 pt-24 px-4">
                <SearchBar />
                <div className="flex flex-col gap-4">
                    <LeftName />
                    <LeftName />
                    <LeftName />
                    <LeftP className="flex-1" />
                </div>
                <Bottom />
            </div>
            <div className="hidden lg:flex flex-col col-span-2 gap-4">
                <RightTop />
                <RightMiddle />
                <RightBottom />
            </div>
        </div>
    );
};

export default Layout;

