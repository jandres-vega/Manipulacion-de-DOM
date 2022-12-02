const resolveRoutes = (route) => {
    switch (route) {
        case '/':
            return `/`
        case 'favorites':
            return `/${route}`
        case 'shopping':
            return `/${route}`
        case 'dashboard':
            return `/${route}`
        case 'formbuy':
            return `/${route}`
    }
}
export default resolveRoutes;