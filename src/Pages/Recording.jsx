import Header from '../Components/Header'
import Footer from '../Components/Footer'



const Recording = () => {
    return (
        <section className='max-w-[1440px] mx-auto'>
         <div className=' w-[90%] lg:w-[80%] mx-auto py-10'>
        </div>
         <Header />
 
        <div className='max-w-[90%] lg:max-w-[500px] mx-auto text-center flex flex-col items-center gap-8'>
          <h5 className='text-[#141414] font-bold font-sora lg:text-xl'>
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </h5>
          <button className='bg-primary text-white py-1 px-3 rounded-md'>
            Save Video
          </button>
          <p className='font-bold text-[#7e7e7e]'>
            Don’t have an account?{' '}
              Create account{' '}
          </p>
        </div>
         
           
            
            <Footer />
        </section>
            );
}

export default Recording;