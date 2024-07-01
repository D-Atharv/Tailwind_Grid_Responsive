import React from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import LeftP from './components/LeftP'
import RightTop from './components/RightTop'
import LeftName from './components/LeftName'
import Bottom from './components/Bottom'
import RightBottom from './components/RightBottom'
import RightMiddle from './components/RightMiddle'

const App = () => {
  return (
    // <Layout />
    // <>
    //   <div className='grid row-span-1 col-span-1 h-screen'>
    //     <div className=' '>
    //       <Header />
    //     </div>
    //     <div className='grid grid-cols-12 border-2 border-green-800 '>
    //       <div className='border-r-2 border-cyan-300 lg:col-span-4 p-2 grid grid-rows-10 pr-2 '>
    //         <div className='row-span-1 pb-2'> <LeftP /></div>
    //         <div className='row-span-6 pb-2'> <LeftName /></div>
    //         <div className='row-span-4 pb-2 bg-yellow-400'> <Bottom /></div>
    //       </div>
    //       <div className='hidden xl:col-span-8 xl:grid xl:grid-rows-10 xl:p-2 xl:pl-2'>
    //         <div className='row-span-1 pb-2'> <RightTop /></div>
    //         <div className='row-span-8 pb-2'> <RightMiddle /></div>
    //         <div className='row-span-1 pb-2'> <RightBottom /></div>
    //       </div>
    //     </div>
    //   </div>
    // </>


    // <>
    //   <div className=' bg-cyan-500 flex flex-col'>


    //     <div className='container mx-auto  '>
    //       <Header />
    //     </div>

    //     <div className='grid xl:grid-cols-12 border-2 border-black row-span-2'>
    //       <div className='col-span-3 border-2 border-yellow-400'>

    //         <div className='grid grid-rows-12 border-2 bg-violet-950'>
    //           <div className='row-span-2 border-2 border-green-800 p-4'><LeftP /></div>
    //           <div className='row-span-8 border-2 border-pink-800 p-4'><LeftName /></div>
    //           <div className='row-span-2 border-2 bg-red-800 p-4'><Bottom /></div>
    //         </div>

    //       </div>

    //       <div className='hidden xl:block col-span-9 grid grid-rows-12 border-2 border-red-400'>
    //         <div><RightTop /></div>
    //       </div>
    //     </div>

    //   </div>
    // </>

    <>
      <div className='grid  grid-flow-row grid-rows-12 bg-cyan-300 min-h-screen gap-x-4 gap-y-0 '>
        <div className='border-2 border-black bg-orange-950'><Header /></div>

        <div className='grid lg:grid-cols-12 row-span-12 border-2 border-pink-700 lg:gap-x-4 '>

          <div className=' col-span-4 grid grid-rows-12 '>
            <div className=' row-span-2 border-2 border-yellow-400 bg-yellow-400'><LeftP /></div>
            <div className=' row-span-8 border-2 border-yellow-400 bg-slate-900'><LeftName /></div>
            <div className=' row-span-2 border-2 border-yellow-400 bg-red-800'><Bottom /></div>
          </div>

          <div className='hidden lg:grid grid grid-rows-11 col-span-8 '>
            <div className='row-span-1 border-2 border-yellow-400 bg-green-950'><RightTop /></div>
            <div className='row-span-9 border-2 border-yellow-400 bg-violet-900'><RightMiddle /></div>
            <div className='row-span-1 border-2 border-yellow-400 bg-orange-900'><RightBottom /></div>
          </div>

        </div>
      </div >
    </>
  )
}

export default App
