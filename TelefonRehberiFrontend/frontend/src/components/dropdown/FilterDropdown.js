import React from 'react'

const FilterDropdown = () => {
  return (
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle bg-light text-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Default Filter
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
      <li><a class="dropdown-item active" href="#">Added :  The newest to oldest</a></li>
      <li><a class="dropdown-item" href="#">Added : The oldest to newest </a></li>
      <li><a class="dropdown-item" href="#">Filter by first letter </a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  )
}

export default FilterDropdown