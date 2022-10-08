import React from 'react'

const SearchBar=({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {
  return (
   <form onSubmit={handleSubmit}>
   <input 
   value={value}
   disabled={isLoading}
   onChange={onChange}
   placeholder="Search Food Here ..."
   className="form-control"
   />
   <input type="button" disabled={isLoading || !value}
    className="Btn" value="Search" />
   </form>
  )
}

export default SearchBar
