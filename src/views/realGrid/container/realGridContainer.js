import { useEffect, useRef } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import 'realgrid/dist/realgrid-style.css';
import styled from 'styled-components';
import { columns, fields, rows } from '../constants/data';

// https://docs.realgrid.com/start/quick/realgrid-ready-to-fetching

// GridView: 눈에 보이는 부분을 담당하는 중요한 객체입니다.
// DataProvider: 데이터를 관리하는 중요한 객체입니다.
// DataField: 데이터 저장을 위한 논리적 장소를 담당하는 객체입니다.
// DataColumn: DataField의 정보를 화면에 표현하기 위한 속성을 담고 있는 객체입니다.
// ItemModel 또는 GridItem: 그리드에 보여지는 행 정보를 담고 있는 모델 객체입니다.
// Controller: 그리드에서 Item을 조작하기 위한 여러 가지 내부적인 객체들을 아우르는 의미의 명칭입니다

function realGridContainer() {
    const realgridElement = useRef(null);
    const gridView = useRef(null);
    const dp = new LocalDataProvider(true);

    useEffect(() => {
        const container = realgridElement.current;
        const gv = (gridView.current = new GridView(container));
        gv.setDataSource(dp);
        dp.setFields(fields);
        gv.setColumns(columns);
        dp.setRows(rows);

        return () => {
            dp.clearRows();
            gv.destroy();
            dp.destroy();
        };
    }, []);

    const clickHanlder = type => {
        if (type === 'add') {
            dp.addRow({
                Name: 'add',
                Email: 'add@naver.com',
            });
        } else if (type === 'del') {
            const items = gridView.current.getCheckedItems();
            dp.removeRows(items);
        }
    };
    return (
        <Container>
            <div className="App">
                <div
                    style={{ height: '500px', width: '100%' }}
                    ref={realgridElement}
                ></div>
            </div>
            <SubDiv>
                <button onClick={() => clickHanlder('add')}>추가</button>
                <button onClick={() => clickHanlder('del')}>삭제</button>
            </SubDiv>
        </Container>
    );
}

export default realGridContainer;

const Container = styled.div`
    margin: 10px;
`;

const SubDiv = styled.div`
    button {
        margin: 10px;
    }
`;
