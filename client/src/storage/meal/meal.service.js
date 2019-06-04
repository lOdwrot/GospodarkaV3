const mealListMock = [
    {name: 'Ziemniaki i schab'},
    {name: 'Surówka z ziemniaka'},
    {name: 'Ziemniaki'},
]

export const getMealList = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: mealListMock}))
})