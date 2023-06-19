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
        title: 'Gestionar Aulas',
        icon: 'mdi-cast-education',
        to: '/aulas/gestionaraulas'
    },
    {
        title: 'facilitadores',
        icon: 'mdi-human-male-board',
        to: '/aulas/facilitadores'
    },
    {
        title: 'Plataformas Virtuales',
        icon: 'mdi-monitor-account',
        to: '/aulas/plataformas'
    },
    {
        title: 'Modalidades',
        icon: 'mdi-book-education-outline',
        to: '/aulas/modalidades'
    },
    {
        title: 'Tipo de Formacion',
        icon: 'mdi-folder-information-outline',
        to: '/aulas/tipoformacion'
    },
    {
        title: 'Periodo de Formacion',
        icon: 'mdi-clipboard-text-clock-outline',
        to: '/aulas/periodoformacion'
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
