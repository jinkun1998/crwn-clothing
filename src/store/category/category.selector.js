import { createSelector } from "reselect"

const selectCategoriesReducer = (state) => state.categories.categories

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categories) => {
        return categories
            .reduce((collection, docSnapshot) => {
                const { title, items } = docSnapshot
                collection[title.toLowerCase()] = items
                return collection
            }, [])
    }
)