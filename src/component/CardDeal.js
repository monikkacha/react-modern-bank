import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Fina a better card deal
                    <br className='hidden sm:block' />
                    in few easy steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At tempora odit modi iste eos quasi hic nisi eligendi consequuntur illum?</p>
                <Button styles='mt-8' />
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt='card' className='w-[100%] h-[100%]' />
            </div>
        </section>
    )
}

export default CardDeal