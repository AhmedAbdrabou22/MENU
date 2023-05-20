import React from 'react'

const Category = ({filterData}) => {
    const onFilter = (categoryName)=>{
        filterData(categoryName);
    }
    return (
        <div className='btns w-50 text-center m-auto mt-4 my-5'>
            <button onClick={()=>onFilter("الكل")}  className='btn categoryBtn'>الكل</button>
            <button onClick={()=>onFilter("افطار")} className='btn categoryBtn'>الفطار</button>
            <button onClick={()=>onFilter("غدا")} className='btn categoryBtn'>الغدا</button>
            <button onClick={()=>onFilter("عشا")} className='btn categoryBtn'>العشا</button>
        </div>
    )

}

export default Category
