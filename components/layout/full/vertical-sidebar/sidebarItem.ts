export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Inicio' },
    {
        title: 'Dashboard',
        icon: 'mdi-view-dashboard-outline',
        to: '/'
    },
    { header: 'aulas virtuales' },
    {
        title: 'facilitadores',
        icon: 'mdi-human-male-board',
        to: '/ui/typography'
    },
    {
        title: 'Gestionar Aulas',
        icon: 'mdi-cast-education',
        to: '/ui/shadow'
    },
    {
        title: 'Plataformas Virtuales',
        icon: 'mdi-monitor-account',
        to: '/ui/typography'
    },
    {
        title: 'Modalidades',
        icon: 'mdi-book-education-outline',
        to: '/ui/typography'
    },
    {
        title: 'Tipo de Formacion',
        icon: 'mdi-folder-information-outline',
        to: '/ui/typography'
    },
    {
        title: 'Periodo de Formacion',
        icon: 'mdi-clipboard-text-clock-outline',
        to: '/ui/typography'
    },
    { header: 'estudiantes' },
    {
        title: 'Sedes',
        icon: 'mdi-home-city-outline',
        to: '/auth/login'
    },
    {
        title: 'Gestionar Estudiantes',
        icon: 'mdi-account-multiple-plus-outline',
        to: '/auth/register'
    },
    { header: 'Notas' },
    {
        title: 'Registro de Notas',
        icon: 'mdi-note-text-outline',
        to: '/icons'
    },
    { header: 'gestion' },
    {
        title: 'Cuentas',
        icon: 'mdi-cog-outline',
        to: '/icons'
    },
    {
        title: 'Pagos',
        icon: 'mdi-cash-check',
        to: '/sample-page'
    },
    {
        title: 'Metodos de pago',
        icon: 'mdi-cash-register',
        to: '/sample-page'
    },
];

export default sidebarItem;
