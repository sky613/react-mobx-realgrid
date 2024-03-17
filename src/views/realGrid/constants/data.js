import { ValueType } from 'realgrid';

export const fields = [
    {
        fieldName: 'Name',
        dataType: ValueType.TEXT,
    },
    {
        fieldName: 'Email',
        dataType: ValueType.TEXT,
    },
];

export const columns = [
    {
        name: 'Name',
        fieldName: 'Name',
        type: 'data',
        width: '80',
        styles: {
            textAlignment: 'center',
        },
        header: {
            text: 'Name',
            showTooltip: true,
            tooltip: '<span style="color: red;">이름</span>',
        },
        renderer: {
            type: 'text',
            showTooltip: true,
        },
    },
    {
        name: 'Email',
        fieldName: 'Email',
        type: 'data',
        width: '300',
        styles: {
            textAlignment: 'center',
        },
        header: {
            text: 'Email',
            showTooltip: false,
        },
    },
];

export const rows = [
    {
        Name: 'test',
        Email: 'test@naver.com',
    },
    {
        Name: 'test1',
        Email: 'test1@naver.com',
    },
    {
        Name: 'test2',
        Email: 'test2@naver.com',
    },
    {
        Name: 'test3',
        Email: 'test3@naver.com',
    },
    {
        Name: 'test4',
        Email: 'test4@naver.com',
    },
];
