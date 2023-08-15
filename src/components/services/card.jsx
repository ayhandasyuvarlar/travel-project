import './services.scss'

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ id, title, img, content, idx }) => {
    return (
        <aside className='category-card' id={id}>
            <div className='category-card-body'>
                <img src={img} alt={title} className='category-card-img' id={idx} />
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </aside>
    )
}
export default CategoryCard
