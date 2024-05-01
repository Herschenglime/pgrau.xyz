type Theme = 'system' | 'light' | 'dark'

interface Link {
    name: string;
    path: string;
}

interface Post {
    path:string;
    meta: {
        title: string
        description: string
        date: string
        hidden: boolean
    }
}
