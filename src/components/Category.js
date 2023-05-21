import React from 'react'

const Category = ({filterData , filterCategory}) => {
    const onFilter = (categoryName)=>{
        filterData(categoryName);
    }
    return (
        <div className='btns w-50 text-center m-auto mt-4 my-5'>
            {
                filterCategory.length >=1  ? (filterCategory.map((filterCat)=>{
                    return(
                        <button key={filterCat} onClick={()=>onFilter(filterCat)}  className='btn categoryBtn'>{filterCat}</button>
                    )
                })) : <h1>No</h1>
            }
        </div>
    )

}

export default Category
