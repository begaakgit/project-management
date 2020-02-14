
export interface IPropsNavbar {
    list: boolean,
    title: string,
    withIcon: boolean,
    container: string,
    values: (object)[]
}


export const propsNavbar: IPropsNavbar = {
    list: true,
    title: "",
    withIcon: false,
    container: "nav",
    values: [
        {
            title: "Profile",
            id: "profile",
            link: "#"
        },
        {
            title: "Notification",
            id: "notification",
            link: "#"
        },
        {
            title: "Accounts",
            id: "accounts",
            link: "#"
        },
        {
            title: "App",
            id: "app",
            link: "#"
        },
    ]
}


export const propsNavbar_sidebar: IPropsNavbar = {
    list: false,
    title: "Menu",
    withIcon: false,
    container: "nav flex-column",
    values: [
        {
            title: "Menu",
            id: "menu",
            link: "#"
        },
        {
            title: "my Tasks",
            id: "tasks",
            link: "#"
        },
        {
            title: "notifications",
            id: "notification",
            link: "#"
        }
    ]
}

export const propsNavbar_sidebarProjects: IPropsNavbar = {
    list: false,
    title: "Projects",
    withIcon: true,
    container: "nav flex-column",
    values: [
        {
            icon: "fa fa-search",
            id: "dashboad",
            title: "Dashboard UI kit",
            link: "#"
        },
        {
            icon: "fa fa-search",
            id: "crm",
            title: "CRM System ",
            link: "#"
        },
        {
            icon: "fa fa-search",
            id: "webdesign",
            title: "Web Designs",
            link: "#"
        },
        {
            icon: "fa fa-search",
            id: "communication",
            title: "Communication Tools",
            link: "#"
        }
    ]
}

export const propsNavbar_sidebarTeam: IPropsNavbar = {
    list: false,
    title: "Team",
    withIcon: false,
    container: "nav flex-column",
    values: [
        {
            id: "designer",
            title: "Designer",
            link: "#",
            images: [
                {
                    className: 'rounded-circle',
                    src: '/images/1.jpg',
                    id: "image"
                },
                {
                    className: 'rounded-circle',
                    src: '/images/1.jpg',
                    id: "image"
                },
            ]
        },
        {

            id: "backend",
            title: "Backdend",
            link: "#",
            images: [
                {
                    className: 'rounded-circle',
                    src: '/images/1.jpg',
                    id: "image"
                },
                {
                    className: 'rounded-circle',
                    src: '/images/1.jpg',
                    id: "image"
                },
                {
                    className: 'rounded-circle',
                    src: '/images/1.jpg',
                    id: "image"
                },
                
            ]
        },
        {

            id: "frontend",
            title: "Frontend",
            link: "#",
            images: [
                {
                    className: 'rounded-circle',
                    src: '/images/1.jpg',
                    id: "image"
                },
                {
                    className: 'rounded-circle',
                    src: '/images/1.jpg',
                    id: "image"
                },
            ]
        }
    ]
}



