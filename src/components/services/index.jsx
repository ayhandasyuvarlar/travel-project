import './services.scss'
import groupPlus from '../../assets/group.svg'
import CategoryCard from './card'
import { useServices } from '../../context/services'

const Services = () => {
  const categoryData = useServices()
  return (
    <section className='services-container'>
      <div className='services-container-head'>
        <h3 className='services-container-head-h3-typography'>Category</h3>
        <h1 className='services-container-head-h1-typography' >We Offer Best Services</h1>
      </div>
      <div className='group-plus-svg'>
        <img src={groupPlus} alt="" />
      </div>
      <main className='category-list'>
        {categoryData.map((item)=> (
          <CategoryCard key={item.id} {...item}></CategoryCard>
        )) }
      </main>
    </section>
  )
}

export default Services
