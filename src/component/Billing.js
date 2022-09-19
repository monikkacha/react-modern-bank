import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'

const Billing = () => {
    return (
        <section id='product' className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="billing" className='w-[100%] h-[100%] relativd z-[5]' />
                <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white_gradient' />
                <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink_gradient' />
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Easily control your <br className='sm:block hidden' />
                    billing & invoicing.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi aspernatur inventore quis, quasi doloremque consequuntur iusto est! Quam, excepturi.</p>
                <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                    <img src={apple} alt='Google_play' className='w-[128px] h-[42px] object-contain cursor-pointer mr-10' />
                    <img src={google} alt='Google_play' className='w-[128px] h-[42px] object-contain cursor-pointer' />
                </div>
            </div>
        </section>
    )
}

export default Billing