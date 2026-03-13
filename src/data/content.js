/* Datos estáticos centralizados del sitio */
export const NAV_LINKS = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#nosotros' },
    { label: 'Productos', href: '#productos' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Contacto', href: '#contacto' },
];

export const HERO_STATS = [
    { value: '+50K', label: 'Estudiantes' },
    { value: '15+', label: 'Universidades' },
    { value: '98%', label: 'Satisfacción' },
];

export const TRUST_ITEMS = ['Regulado por SUDEBAN', '100% Digital', 'Sin comisiones'];

export const ABOUT_FEATURES = [
    {
        title: 'Nuestro Origen',
        description: 'Nacimos dentro del ecosistema universitario para entender las necesidades reales de la comunidad académica venezolana.',
        icon: 'graduation-cap',
    },
    {
        title: 'Compromiso Social',
        description: 'Creemos en la educación financiera como herramienta de transformación. Por eso ofrecemos recursos y talleres gratuitos.',
        icon: 'handshake',
    },
    {
        title: 'Seguridad y Confianza',
        description: 'Operamos bajo estrictas normas regulatorias con tecnología de punta para proteger tu patrimonio.',
        icon: 'shield-check',
    },
];

export const STATS = [
    { value: 50000, suffix: '+', label: 'Usuarios Activos' },
    { value: 15, suffix: '+', label: 'Universidades Aliadas' },
    { value: 98, suffix: '%', label: 'Índice de Satisfacción' },
    { value: 200, suffix: 'M+', label: 'En Créditos Otorgados', prefix: 'Bs.' },
];

export const SERVICES = [
    {
        icon: 'credit-card',
        title: 'Cuenta Universitaria',
        description: 'Abre tu cuenta corriente o de ahorro sin costo de mantenimiento. Diseñada especialmente para estudiantes universitarios activos.',
        features: ['Sin comisión mensual', 'Tarjeta de débito gratuita', 'Banca digital 24/7'],
    },
    {
        icon: 'book-open',
        title: 'Crédito Educativo',
        description: 'Financia tu matrícula, materiales académicos o programas de posgrado con tasas preferenciales exclusivas para la comunidad universitaria.',
        features: ['Tasas preferenciales', 'Hasta 60 meses plazo', 'Sin aval requerido'],
    },
    {
        icon: 'piggy-bank',
        title: 'Ahorro Programado',
        description: 'Establece metas de ahorro para tu intercambio estudiantil, equipos o proyectos. Nosotros te ayudamos a alcanzarlas.',
        features: ['Metas personalizadas', 'Rendimiento garantizado', 'Sin penalidades'],
    },
    {
        icon: 'trending-up',
        title: 'Inversiones Académicas',
        description: 'Haz crecer tu dinero con fondos de inversión diseñados para perfiles conservadores y con bajo capital inicial.',
        features: ['Desde Bs.200', 'Gestión automatizada', 'Reportes en tiempo real'],
    },
    {
        icon: 'home',
        title: 'Crédito para Egresados',
        description: 'Al graduarte, accede a créditos hipotecarios y vehiculares con condiciones especiales para profesionales recién egresados.',
        features: ['Condiciones especiales', 'Asesoría personalizada', 'Proceso rápido'],
    },
    {
        icon: 'arrow-left-right',
        title: 'Transferencias Internacionales',
        description: 'Envía y recibe dinero del exterior para tus estudios de posgrado, investigaciones o intercambios académicos.',
        features: ['Múltiples divisas', 'Comisiones bajas', 'Cobertura global'],
    },
];

export const BENEFITS = [
    { icon: 'smartphone', label: 'App Móvil 24/7' },
    { icon: 'shield-off', label: 'Sin comisiones ocultas' },
    { icon: 'fingerprint', label: 'Autenticación biométrica' },
    { icon: 'zap', label: 'Transferencias instantáneas' },
    { icon: 'target', label: 'Metas de ahorro' },
    { icon: 'bar-chart-3', label: 'Análisis de gastos' },
    { icon: 'message-circle', label: 'Asesor virtual' },
    { icon: 'globe', label: 'Operaciones en divisas' },
    { icon: 'landmark', label: 'Red de cajeros universitarios' },
    { icon: 'book-open', label: 'Educación financiera gratuita' },
    { icon: 'users', label: 'Tasas preferenciales' },
    { icon: 'refresh-cw', label: 'Domiciliación de pagos' },
];

export const TESTIMONIALS = [
    {
        text: 'Banco Universitario cambió completamente mi relación con las finanzas. Desde que soy estudiante, tengo acceso a herramientas que nunca imaginé tener. La app es increíblemente fácil de usar.',
        name: 'María González',
        role: 'Estudiante de Ingeniería, UCV',
        initial: 'M',
        stars: 5,
    },
    {
        text: 'Como docente universitaria, valoro enormemente el crédito educativo que me otorgaron para continuar mi especialización. Las condiciones fueron las mejores del mercado.',
        name: 'Prof. Carlos Mendoza',
        role: 'Docente de Economía, USB',
        initial: 'C',
        stars: 5,
    },
    {
        text: 'Pude financiar mi intercambio académico en España gracias a las transferencias internacionales de Banco Universitario. El proceso fue rápido, seguro y con muy buena tasa.',
        name: 'Ana Ramírez',
        role: 'Estudiante de Medicina, ULA',
        initial: 'A',
        stars: 5,
    },
];

export const CTA_STEPS = [
    { step: '01', text: 'Descarga la app o ingresa al sitio web' },
    { step: '02', text: 'Completa tus datos y verifica tu identidad' },
    { step: '03', text: 'Empieza a operar tu cuenta universitaria' },
];

export const FOOTER_PRODUCTS = [
    'Cuenta Universitaria', 'Crédito Educativo', 'Ahorro Programado',
    'Inversiones', 'Crédito Egresados', 'Transferencias',
];

export const FOOTER_INSTITUTION = [
    'Quiénes Somos', 'Misión y Visión', 'Equipo Directivo',
    'Responsabilidad Social', 'Prensa', 'Trabaja con Nosotros',
];

export const UNIVERSITIES = [
    { value: 'ucv', label: 'Universidad Central de Venezuela' },
    { value: 'usb', label: 'Universidad Simón Bolívar' },
    { value: 'ula', label: 'Universidad de Los Andes' },
    { value: 'luz', label: 'Universidad del Zulia' },
    { value: 'uc', label: 'Universidad de Carabobo' },
    { value: 'otra', label: 'Otra universidad' },
];
