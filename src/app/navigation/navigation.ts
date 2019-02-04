import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            // {
            //     id       : 'sample',
            //     title    : 'Sample',
            //     translate: 'NAV.SAMPLE.TITLE',
            //     type     : 'item',
            //     icon     : 'email',
            //     url      : '/sample',
            //     badge    : {
            //         title    : '25',
            //         translate: 'NAV.SAMPLE.BADGE',
            //         bg       : '#F44336',
            //         fg       : '#FFFFFF'
            //     }
            // },

            {
                id       : 'visitas',
                title    : 'Visitas',
                translate: 'NAV.VISITAS.TITLE',
                type     : 'item',
                icon     : 'person',
                url      : '/visitas',
            },

            {
                id       : 'atendimentos',
                title    : 'Atendimentos',
                translate: 'NAV.ATENDIMENTOS.TITLE',
                type     : 'item',
                icon     : 'group',
                url      : '/atendimentos',
            },

            {
                id       : 'eventos',
                title    : 'Eventos',
                translate: 'NAV.EVENTOS.TITLE',
                type     : 'item',
                icon     : 'calendar_today',
                url      : '/eventos',
            },

            {
                id       : 'unidades',
                title    : 'Unidades',
                translate: 'NAV.UNIDADES.TITLE',
                type     : 'item',
                icon     : 'business',
                url      : '/unidades',
            },
        ]
    }
];
