import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Paging from 'views/paging/container/pagingContainer';
import RealGrid from 'views/realGrid/container/realGridContainer';
import TodoList from 'views/todoList/container/todoListContainer';

function App() {
    const navigate = useNavigate();
    return (
        <Container>
            <Header>
                <div onClick={() => navigate(`/`)}>TodoList</div>
                <div onClick={() => navigate(`/realGrid`)}>RealGrid</div>
                <div onClick={() => navigate(`/paging`)}>Paging</div>
            </Header>
            <Routes>
                <Route exact path="/" element={<TodoList />} />
                <Route exact path="/realGrid" element={<RealGrid />} />
                <Route exact path="/paging" element={<Paging />} />
            </Routes>
        </Container>
    );
}

export default App;

const Container = styled.div`
    margin: 10px;
`;
const Header = styled.div`
    border-bottom: 1px solid;
    display: flex;
    div {
        padding: 10px;
    }
`;
