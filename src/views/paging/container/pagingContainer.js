import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

async function fetchList(pageNum) {
    const response = await fetch(
        `http://localhost:9000/data/limit=2&page=${pageNum}.json`,
    );
    return response.json();
}

function pagingContainer() {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError, error } = useQuery(
        ['lists', currentPage],
        () => fetchList(currentPage),
        { staletime: 1500 },
    );

    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    if (isError) {
        return <h3>Error</h3>;
    }
    return (
        <Container>
            {data &&
                data.map((v, i) => (
                    <p key={i}>
                        {v.id} {v.label}
                    </p>
                ))}
            <div>
                <div className="pages">
                    <button
                        disabled={currentPage <= 1}
                        onClick={() => {
                            setCurrentPage(currentPage => currentPage - 1);
                        }}
                    >
                        prev page
                    </button>
                    <span>Page {currentPage}</span>
                    <button
                        disabled={currentPage >= 4}
                        onClick={() => {
                            setCurrentPage(currentPage => currentPage + 1);
                        }}
                    >
                        Next page
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default pagingContainer;

const Container = styled.div`
    margin: 10px;
`;
