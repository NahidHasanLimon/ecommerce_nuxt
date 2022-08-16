<template>
    <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            <span class="hidden sm:inline">
              Showing
            </span>
            6 of 24 Products
          </p>

          <div class="ml-4">
            <label
              for="SortBy"
              class="sr-only"
            >
              Sort
            </label>

            <select
              id="SortBy"
              name="sort_by"
              class="text-sm border-gray-100 rounded"
            >
              <option readonly>Sort</option>
              <option value="title-asc">Title, A-Z</option>
              <option value="title-desc">Title, Z-A</option>
              <option value="price-asc">Price, Low-High</option>
              <option value="price-desc">Price, High-Low</option>
            </select>
          </div>
        </div>
</template>